import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Device from './modules/Device'
import Menu from './modules/Menu'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: { Device, Menu },
    state: {
        Name: '',
        /**
         * @param {Object} UserInfo 用户信息
         * */
        UserInfo: {},
        /**
         * @param {Object} SysInfo 系统信息
         * */
        SysInfo: {},
        /**
         * @param {Boolean} IsMobileMode 是移动端模式
         * */
        IsMobileMode: false,
        /**
         * @param {Boolean} RecordTabShow 运行记录tab显示模式
         * */
        RecordTabShow: false,
        /**
         * @param {Boolean} IsMobileMode 菜单模式预览状态
         * */
        PreviewMode: false,
        /**
         * @param {String} IsMobileMode 选项卡名称
         * */
        TabName: 'Curve'
    },
    mutations: {
        setState (state, payload) {
            const [obj, key, value] = payload
            if (payload.length === 3) {
                if (state[obj]) {
                    state[obj][key] = value
                }
            } else {
                state[obj] = key
            }
        }
    },
    plugins: [createPersistedState({
        paths: ['SysInfo', 'UserInfo', 'RecordTabShow']
    })]
})
