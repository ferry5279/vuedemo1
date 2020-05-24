import { post } from '@/utils/request'
import api from '@/services/api'
import { LOGIN_DATA_ACTION } from '@/constansts/actionType'
import { LOGIN_DATA } from '@/constansts/mutationType'
export default {
    namespaced: true,
    state: {
        Status: 0
    },
    mutations: {
        [LOGIN_DATA](state, payload) {
            state.Status = payload.code;
        }
    },
    actions: {
        async [LOGIN_DATA_ACTION]({ commit }, b) {
            const loginRes = await post(api.Login, b);
            commit('LOGIN_DATA', loginRes)
        }
    }
}