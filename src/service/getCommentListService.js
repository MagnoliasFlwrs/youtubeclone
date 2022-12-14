import request from './api'

const getCommentListService = {
    async getComments(videoId) {
        const {data} = await request('/commentThreads' , {
            params: {
                part: 'snippet',
                id : videoId,
            },

        })
        console.log(data)
        return data
    }
}
export default getCommentListService