import request from './api'

const likeService = {
    async getAll(videoId) {
        const {data} = await request.post('videos/rate' , {
            params: {
                id : `${videoId}`,
                rating :'like',
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })

        return data
    }
}
export default likeService