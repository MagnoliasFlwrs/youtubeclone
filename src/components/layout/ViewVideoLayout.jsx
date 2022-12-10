import React from 'react'
import styled from 'styled-components'
import VideoDetails from '../videoDetails'
import Comments from '../comments'
import ContainerForHeader from '../ContainerForHeader'
import HorisontalVideoCard from '../horisontalVideoCard'
import { useParams } from 'react-router-dom'
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getVideoDetailsById } from '../../redux/slices/getVideoSlice'

export default function ViewVideoLayout() {
    const {id} = useParams()
    const {selectedVideo , isLoading } = useSelector(state => state.video)
    const dispatch =  useDispatch()
    useEffect(() => {
        dispatch(getVideoDetailsById(id))
    },[dispatch,id])
  return (
    <>
        {
            selectedVideo?
            <WatchContainer>
                <ContainerForHeader/>
                <VideoView>
                    <div className='wrapper'>
                            <div className='video__player'>
                                <iframe src={`https://www.youtube.com/embed/${id}`} frameBorder='0' tittle={selectedVideo?.snippet?.title}
                                allowFullScreen width='100%' height='100%'></iframe>
                            </div>
                        <VideoDetails selectedVideo={selectedVideo} videoId={id}/>
                        <Comments/>
                    </div>
                    <div className='horisontal__wrapper'>
                        {[...Array(10)].map(() => <HorisontalVideoCard/>)}
                    </div>
                </VideoView>
            </WatchContainer> :
            <WatchContainer>
                <HalfMalf text={"Loading"} bgColor={"#ffffff"} width={"200px"} height={"200px"} center={true} />
            </WatchContainer>
        }
    </>

  )
}
const WatchContainer = styled.div`
    width: calc(1400px + 16px*2);
    padding: 0 16px;
    margin: 0 auto;
`
const VideoView = styled.div`
    width: 100%;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;
    .wrapper {
        width: 65%;
        display: flex;
        flex-direction: column;
    }
    .video__player {
        height: 63vh;
        width: 100%;
        margin-bottom: 15px;
    }
    .horisontal__wrapper {
        width: 30%;
    }

`