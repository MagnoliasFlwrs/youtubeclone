import request from './api'

const getSubscribeStatusService = {
    async getStatus(channelId) {
        const {data} = await request('/subscriptions' , {
            params: {
                part: 'snippet',
                mine: true,
                forChannelId: `${channelId}`,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }

        })
        return data
    }
}
export default getSubscribeStatusService