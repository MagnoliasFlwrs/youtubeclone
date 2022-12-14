import axios from 'axios'

const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key: 'AIzaSyCgshZUy9ba4hIPyYVYn3I2QHibGrDJA8o',
    }
})
export default request


// key : 'AIzaSyCdcEJHeb21x8m1S5sQM9NkTBUtrcEJe3c'