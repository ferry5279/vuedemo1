import { post, get } from '@/utils/request'
import api from '@/services/api'
import {
    DEFAULT_DATA_ACTION,
    ADD_DATA_ACTION,
    EDIT_DATA_ACTION,
    DELETE_DATA_ACTION
} from '@/constansts/actionType'
import {
    DEFAULT_DATA,
    CANCEL_STATUS,
    SHOW_STATUS,
    EDIT_SHOW_STATUS
} from '@/constansts/mutationType'
export default {
    namespaced: true,
    state: {
        data: [],
        showStatus: false,
        judge: 0,
        title: '添加供应商',
        Editdata: null
    },
    mutations: {
        [DEFAULT_DATA](state, payload) {
            state.showStatus = false
            state.data = payload
        },
        [CANCEL_STATUS](state) {
            state.showStatus = false
            state.Editdata = null;
        },
        [SHOW_STATUS](state, payload) {
            state.judge = payload
            state.showStatus = !state.showStatus
            if (state.judge === 0) {
                state.title = '添加供应商'
            } else {
                state.title = '修改'
            }
        },
        [EDIT_SHOW_STATUS](state, payload) {
            state.Editdata = payload
        },
    },
    actions: {
        async [DEFAULT_DATA_ACTION]({ commit }) {
            const defaultData = await get(api.Defaultdata);
            commit('DEFAULT_DATA', defaultData.data)
        },
        async [ADD_DATA_ACTION]({ commit }, b) {
            const datass = await post(api.Addata, b);
            if (datass.code === 200) {
                const addData = await get(api.Defaultdata);
                commit('DEFAULT_DATA', addData.data)
            }
        },
        async [EDIT_DATA_ACTION]({ commit }, b) {
            await post(api.Editdatas, b);
            commit('CANCEL_STATUS')
        },
        async [DELETE_DATA_ACTION]({ commit }, b) {
            const datas = await post(api.Deletedata, b);
            if (datas.code === 200) {
                const dellData = await get(api.Defaultdata);
                commit('DEFAULT_DATA', dellData.data)
            }
        },
    }
}