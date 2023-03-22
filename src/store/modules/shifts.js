import ShiftService from '@/services/ShiftService.js'
export const namespaced = true
export const state = {
    connectionId: '',
    shiftId: '',
    agentShiftInfo: '{}',
}
export const actions = {
    startShift({ commit }, agentId) {
        return ShiftService.startShift(agentId)
            .then((response) => {
                if (response.status === 200) {
                    commit('START_SHIFT', response.data.aggregateId)
                }
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status === 401) {
                    console.log('Error in Response')
                }
            })
    },
    async updateEventsSubscription({ commit, rootState }) {
        const shiftId = state.shiftId      
        let id = await rootState.websocket.connectionId
        let agentShiftInfo = {
            aggregateId: state.shiftId,
            connectionId: id
        }
        ShiftService.updateEventsSubscription(shiftId, agentShiftInfo)
            .then((response) => {
                commit('UPDATE_EVENTS_SUBSCRIPTION', response.data)
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    console.log('Error in Response')
                }
            })
    },
}
export const mutations = {
    START_SHIFT(state, shiftId) {
        state.shiftId = shiftId
    },
    UPDATE_EVENTS_SUBSCRIPTION(state, agentShiftInfo) {
        state.agentShiftInfo = agentShiftInfo
    },
}
