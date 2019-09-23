import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"


export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        city: "深圳",
        changeType: true
    },
    mutations: {
        changeCity(state, changshu) {
            state.city = changshu;
        },
        changeType(state, changshu) {
            state.changeType = changshu;
        }
    },
    actions: {

    }
})