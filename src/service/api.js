import axios from 'axios'

const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key : 'AIzaSyCS-3pL3DVkuCmKLnGKog58I5zjO-eaHJI',
    }
})
export default request