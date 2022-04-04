<template>
    <div class="home">
        <div class="home-img" v-for="item in colorPool" :key="item" @click="$router.push(`/Info/${item.id}`)">
            <img :src="item.img" alt="">
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
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    .home-img {
        width: calc(100% / 8);
        height: calc(100% / 4);
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        transition: all 200ms initial;
        overflow: hidden;
        cursor: pointer;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: all 200ms initial;

            &:hover {
                transform: scale(1.2);
            }
        }

        &:hover {
            box-shadow: 0 0 8px 0 #00000020;
        }
    }
}
</style>
