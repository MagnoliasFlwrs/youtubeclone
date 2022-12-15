import request from './api'

const addCommentService = {
    async addComment(id,value) {
        const comment = {
            snippet: {
                videoId:id,
                topLevelComment: {
                    snippet: {
                        textOriginal:value
                    }
                }
            }
        }
        await request.post('/commentThreads' , comment , {
            params: {
                part: 'snippet',
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        return
    }
}
export default addCommentService