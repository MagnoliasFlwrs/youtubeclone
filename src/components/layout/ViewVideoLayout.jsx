import React from 'react'
import styled from 'styled-components'
import VideoDetails from '../videoDetails'
import Comments from '../comments'

export default function ViewVideoLayout() {
  return (
    <VideoView>
        <div className='video__container'>
            <div className='video__player'>
                <iframe src='' frameBorder='0' tittle='MY VIDEO'
                allowFullScreen width='100%' height='100%'></iframe>
            </div>
        </div>
        <VideoDetails/>
        <Comments/>
    </VideoView>

  )
}
const VideoView = styled.div`
    width: 100%;
    display: flex;
    .video__container {
        width: 65%;
        overflow-y: auto;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
    }
`