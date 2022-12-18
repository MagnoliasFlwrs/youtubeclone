import request from './api'

const getVideoChannelDetailsService = {
    async getVideo(channelId) {
        const {data} = await request('/channels' , {
            params: {
                part: 'snippet, contentDetails,statistics',
                id:`${channelId}`,
            }
        })
        return data
    }
}
export default getVideoChannelDetailsService