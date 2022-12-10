import request from './api'

const getSubscribeStatusService = {
    async getStatus(channelId) {
        const {data} = await request('/channels' , {
            params: {
                part: 'snippet, contentDetails,statistics',
                forChannelId: channelId,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }

        })
        console.log(data)
        return data
    }
}
export default getSubscribeStatusService