import request from './api'

const categoryVideoService = {
    async getAll(value) {
        const {data} = await request('/search' , {
            params: {
                part: 'snippet',
                maxResults : 15,
                pageToken : '' ,
                q: value,
                type: 'video',
            }
        })
        console.log(data)

        return data
    }
}
export default categoryVideoService