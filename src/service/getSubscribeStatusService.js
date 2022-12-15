import request from './api'

const getSubscribeStatusService = {
    async getStatus(channelId) {
        const {data} = await request('/channels' , {
            params: {
                part: 'snippet, contentDetails,statistics',
                mine: true,
                forChannelId: `${channelId}`,
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