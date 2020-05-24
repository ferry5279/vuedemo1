import Vue from 'vue';
import Vuex from 'vuex';
import { login, home } from './modules';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        home
    }
})