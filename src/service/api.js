import axios from 'axios'

const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key: 'AIzaSyDMGSpBh5mAciiOXfiJMuctv3F1tUGn_vw',
    }
})
export default request


// key : 'AIzaSyCdcEJHeb21x8m1S5sQM9NkTBUtrcEJe3c'