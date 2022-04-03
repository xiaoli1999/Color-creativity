<template>
    <div class="layout-content">
        <router-view class="content"></router-view>
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
    margin: auto;
    width: 1200px;
    height: 600px;
    background: initial;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 8px 0 #f4f4f4aa;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    padding: 24px;
    transition: height, margin-top ease-out 0.3s;

    > div {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
    }
}
</style>
