import request from './api'

const getSubscriptionsService = {
    async getAll() {
        const {data} = await request('/subscriptions' , {
            params: {
                part: 'snippet, contentDetails',
                mine:true,
                maxResults:20,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })

        return data
        }
}
export default getSubscriptionsService