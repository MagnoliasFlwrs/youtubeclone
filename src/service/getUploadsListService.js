import request from './api'

const getUploadsListService = {
    async getAll(uploads) {
        const {data} = await request('/playlistItems' , {
            params: {
                part: 'snippet, contentDetails',
                playlistId: uploads,
                maxResults:30,
            },
        })

        return data
    }
}
export default getUploadsListService