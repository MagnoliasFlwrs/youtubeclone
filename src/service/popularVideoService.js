
import request from './api'

const popularVideoService = {
    async getAll() {
        const {data} = await request('/videos' , {
            params: {
                part: 'snippet, contentDetails,statistics',
                chart :'mostPopular',
                regionCode : 'BY',
                maxResults : 9,
                pageToken : '' ,
            }
        })
        console.log(data)

        return data
    }
}
export default popularVideoService