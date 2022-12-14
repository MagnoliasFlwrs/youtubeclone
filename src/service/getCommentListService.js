import request from './api'

const getCommentListService = {
    async getComments(videoId) {
        const {data} = await request('/commentThreads' , {
            params: {
                part: 'snippet',
                videoId: `${videoId}`,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        return data
    }
}
export default getCommentListService