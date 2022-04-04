<template>
    <div class="details">
        <header>
            <ColorPicker v-model="color" recommend />
            <div class="slider">
                <Slider v-model="colorScale" :min="1" :max="3" :step="0.5" show-stops show-tip="never"></Slider>
            </div>
            <Button type="primary" :loading="loading" icon="ios-hand-outline" ghost size="small" :disabled="btnLoding" @click="saveLoading">
                <span v-if="!btnLoding">保存画板</span>
                <span v-else>正在保存...</span>
            </Button>
        </header>
        <main>
            <div class="main" :style="{ transform: `scale(${colorScale})` }">
                <div v-for="(item, index) in colorList" :key="index" :style="{ background: `#${item}` }" @click="changeColor(item, index)"></div>
            </div>
            <Spin v-if="colorLoding" size="large" fix></Spin>
        </main>
    </div>
</template>

<script>
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import { getColor, saveColor } from '../api'

export default {
    name: 'Info',
    data () {
        return {
            colorList: [],
            color: '#fff',
            colorLoding: false,
            btnLoding: false,
            colorScale: 1
        }
    },
    created () {
        this.getColorInfo()
    },
    methods: {
        async getColorInfo () {
            this.colorLoding = true
            const color = await getColor(this.$route.id)
            this.colorList = color.split(',')
            this.colorLoding = false
        },
        changeColor (color, i) {
            this.$set(this.colorList, i, this.color.split('#')[1])
        },
        async saveLoading () {
            this.btnLoding = true
            const queryData = {
                id: this.$route.id,
                color: this.colorList.join(',')
            }
            const res = await saveColor(queryData)
            if (res.error) return this.$Message.error(res.msg)
            this.$Message.success(res.msg)
            this.btnLoding = false
        }
    }
}
</script>

<style lang="less" scoped>
.details {
    width: 100%;
    height: 600px;
    overflow: hidden;

    header {
        max-width: 492px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;

        .slider {
            width: 240px;
        }
    }

    main {
        width: 492px;
        height: 492px;
        padding: 6px;
        box-shadow: 0 0 8px 0 #00000050;
        overflow: auto;
        cursor: pointer;
        position: relative;
        margin: 0 auto;

        .main {
            width: 480px;
            height: 480px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            box-sizing: content-box;

            div {
                width: 8px;
                height: 8px;
                box-sizing: border-box;
                border: 1px solid #eee;
            }
        }
    }
}

</style>
