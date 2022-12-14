import request from './api'

const getRelatedVideoService = {
    async getVideo(videoId) {
        const {data} = await request('/search' , {
            params: {
                part: 'snippet',
                relatedToVideoId: videoId,
                maxResults : 20,
                type: 'video',
            }
        })
        console.log(data)

        return data
    }
}
export default getRelatedVideoService