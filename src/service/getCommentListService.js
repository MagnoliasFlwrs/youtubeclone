import request from './api'

const getCommentListService = {
    async getComments(videoId) {
        const {data} = await request('/comments' , {
            params: {
                part: 'snippet',
                id : videoId,
                maxResults:30,
            },

        })
        console.log(data)
        return data
    }
}
export default getCommentListService