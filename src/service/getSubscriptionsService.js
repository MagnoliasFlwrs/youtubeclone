import request from './api'

const getSubscriptionsService = {
    async getAll() {
        const {data} = await request('/videos' , {
            params: {
                part: 'snippet, contentDetails,statistics',
                myRating: 'like',
                maxResults : 20,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })

        return data
        }
}
export default getSubscriptionsService