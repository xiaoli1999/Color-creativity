<template>
    <div class="home" :class="loding ? 'min-h' : ''">
        <div class="home-img" v-for="item in colorPool" :key="item" @click="$router.push(`/Info/${item.imageId}`)">
            <img :src="item.imagePath" alt="">
        </div>
        <Spin v-if="loding" size="large" fix></Spin>
    </div>
</template>

<script>

import { getHomeList } from '../api'


export default {
    name: 'Home',
    data () {
        return {
            colorPool: [],
            loding: false
        }
    },
    created () {
        this.getImgList()
    },
    methods: {
        async getImgList () {
            this.loding = true
            const list = await getHomeList()
            if (!list) return this.$Message.error('网络错误')
            this.colorPool = list
            this.loding = false
        }
    }
}
</script>

<style lang="less" scoped>

.min-h {
    min-height: 190px;
}

.home {
    width: 100%;
    //display: flex;
    //flex-wrap: wrap;
    position: relative;
    font-size: 0;

    .home-img {
        display: inline-block;
        width: calc(100% / 8);
        padding-top: calc(100% / 8);
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        border: 1px solid #f7f8fa;
        transition: all 400ms linear;
        overflow: hidden;
        cursor: pointer;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: all 400ms linear;

            &:hover {
                transform: scale(1.2);
            }
        }

        &:hover {
            border-color: #a18cd1;
            border-radius: 4px;
            box-shadow: 0 0 10px .5px #00000030;
        }
    }
}
</style>
