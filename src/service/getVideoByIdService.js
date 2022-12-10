import request from './api'

const getVideoDetailsByIdService = {
    async getVideo(id) {
        const {data} = await request('/videos' , {
            params: {
                part: 'snippet,statistics',
                id:`${id}`,
            }
        })
        console.log(data)
        return data
    }
}
export default getVideoDetailsByIdService
