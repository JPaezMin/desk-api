import TokenService from '@/services/TokenService.js'
import { Buffer } from 'buffer'
export const namespaced = true
export const state = {
    agentId: '{}',
    decodedToken: '',
    accessToken: TokenService.getToken(),
}
export const mutations = {
    DECODE_JWT_TOKEN(state, decodedToken) {
        state.decodedToken = decodedToken
        state.agentId = { agentId: decodedToken.sub }
    },
}
export const actions = {
    decodeToken({ commit }, token) {
        let base64Url = token.split('.')[1]
        let base64 = base64Url.replace('-', '+').replace('_', '/')
        let decodedData = JSON.parse(
            Buffer.from(base64, 'base64').toString('binary')
        )
        commit('DECODE_JWT_TOKEN', decodedData)
    },
}
export const getters = {
    getToken: (state) => {
        return state.accessToken
    },
    getAgentId: (state) => {
        return state.agentId
    },
}
