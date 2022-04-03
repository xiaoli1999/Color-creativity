<template>
    <div class="home">
        <div v-for="item in allBlock" :key="item" @click="$router.push('/Info')"></div>
    </div>
</template>

<script>
import { randomColor } from '@/libs/tools'

export default {
    name: 'Home',
    data () {
        return {
            allBlock: 32,
            colorPool: []
        }
    },
    created () {
        console.log(randomColor())
    }
}
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-wrap: wrap;

    div {
        width: calc(100% / 8);
        height: calc(100% / 4);
        flex-shrink: 0;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        transition: border 200ms initial;

        &:hover {
            border-color: cadetblue;
        }
    }
}
</style>
