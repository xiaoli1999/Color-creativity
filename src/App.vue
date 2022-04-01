<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    data () {
        return {}
    }
}
</script>

<style lang="less">
@import './less/allin.less';

.size {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-x: scroll;
    margin: 0;
    padding: 0;
}

html, body {
    .size;
}

body {
    --theme-color: #2d8cf0;
    /* background: #f4f5f5; */
    //background-image: linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%);
}

#app {
    .size;
}
</style>
