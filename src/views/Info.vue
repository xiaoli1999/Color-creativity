<template>
    <div class="details">
        <header>
            <ColorPicker v-model="color" recommend />
            <div class="slider">
                <Slider v-model="colorScale" :min="1" :max="3" :step="0.5" show-stops show-tip="never"></Slider>
            </div>
            <Button type="primary" :loading="loading" icon="ios-hand-outline" ghost size="small" :disabled="btnLoding" @click="saveColor">
                <span v-if="!btnLoding">保存画板</span>
                <span v-else>正在保存...</span>
            </Button>
            <Button class="exit" type="primary" shape="circle" icon="ios-exit-outline" size="small" @click="$router.back()"></Button>
        </header>
        <main>
            <div ref="main" class="main" :style="{ transform: `scale(${colorScale})` }">
                <div v-for="(item, index) in colorList" :key="index" :style="{ background: `#${item}` }" @click="changeColor(item, index)"></div>
            </div>
            <Spin v-if="colorLoding" size="large" fix></Spin>
        </main>
    </div>
</template>

<script>
import { getColor, saveColor, saveHomeImg } from '../api'
import html2canvas from 'html2canvas'

export default {
    name: 'Info',
    data () {
        return {
            colorList: [],
            color: '#a18cd1',
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
            const color = await getColor(this.$route.params.id)
            this.colorList = color.split(',')
            const that = this
            if (this.colorList.length < 3600) {
                (function addColor () {
                    if (that.colorList.length < 3600) {
                        that.colorList.push('fff')
                        addColor()
                    }
                })()
            }
            this.colorLoding = false
        },
        changeColor (color, i) {
            this.$set(this.colorList, i, this.color.split('#')[1])
        },
        // 保存当前绘画板颜色，并生成图片
        async saveColor () {
            this.btnLoding = true

            // 保存绘画板颜色
            const queryData = {
                id: this.$route.params.id,
                color: this.colorList.join(',')
            }
            const res = await saveColor(queryData)
            if (res.error) {
                this.$Message.error(res.msg)
                return (this.btnLoding = false)
            }
            this.$Message.success(res.msg)

            // 绘制当前画板缩略图
            const canvas = await html2canvas(this.$refs.main)
            if (!canvas) {
                this.$Message.error('画板缩略图绘制有误!')
                return (this.btnLoding = false)
            }
            const queryImg = {
                id: this.$route.params.id,
                img: canvas.toDataURL('image/png')
            }
            const imgRes = await saveHomeImg(queryImg)
            if (imgRes.error) {
                this.$Message.error(imgRes.msg)
                return (this.btnLoding = false)
            }

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
            margin-right: 20px;
        }

        .exit {
            margin-left: 8px;
            background: #a18cd1;
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
            transform-origin: top left;

            div {
                width: 8px;
                height: 8px;
                box-sizing: border-box;
                border: 0.5px solid #f7f8fa;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .details {
        width: 100%;
        height: 620px;
        overflow: hidden;

        header {
            padding: 0 4px;

            .slider {
                width: 140px;
                margin-left: 2px;
                margin-right: 0;
            }

            .exit {
                margin-left: 4px;
            }
        }
    }
}
</style>
