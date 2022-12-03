import axios from 'axios'

const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key : 'AIzaSyCuN8d9jxISobT5ChqmUHaf_4DlLe97o7g',
    }
})
export default request