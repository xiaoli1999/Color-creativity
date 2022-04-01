<template>
    <div class="layout-content">
        <router-view class="flex-fill content"></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {}
    }
}
</script>
<style scoped lang="less">
@import (reference) '../less/basic.less';
@import (reference) '../less/layout.less';

.layout-content {
    margin: 70px auto 10px;
    max-width: 1920px;
    width: 100%;
    height: calc(100% - 140px);
    background-image: linear-gradient(45deg, #6adefb, #2d8cf0, #3c7ac7, #3f5daf);
    box-shadow: 0 0 15px rgba(0, 0, 0, .3);
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
    transition: height, margin-top ease-out 0.3s;

    > div {
        height: calc(100% - 60px);
    }

    > div > div.content {
        height: 100%;
        padding: 14px 10px 14px 14px;
        background: #f4f5f5;
        .of-y-scroll;
    }
}
</style>
