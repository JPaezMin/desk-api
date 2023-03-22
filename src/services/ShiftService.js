import axios from 'axios'
import settings from '@/services/SettingsService'

const shiftBaseUrl = settings.RUBIKO_DESK_BASE_URL;

export default {
    startShift(agentId) {
        return axios.post(
            `${shiftBaseUrl}/api/shifts`,
            agentId,
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            }
        )
    },
    updateEventsSubscription(shiftId, agentShiftInfo) {
        const updateEventsSubscriptionUrl = `${shiftBaseUrl}/api/shifts/${shiftId}/eventssubscription`
        return axios.put(updateEventsSubscriptionUrl, agentShiftInfo, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                    'accessToken'
                )}`,
            },
        })
    },
}
