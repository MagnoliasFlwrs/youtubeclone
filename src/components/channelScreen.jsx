import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getVideoChannelDetails , getUploadsList} from "../redux/slices/getVideoSlice";
import { useParams } from 'react-router-dom';
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import VideoCard from './VideoCard'



export default function ChannelScreen() {
    const {channelId}= useParams()
    const dispath =  useDispatch()

    useEffect(() => {
      dispath(getVideoChannelDetails(channelId))
      dispath(getUploadsList(uploadsId))
  },[dispath, channelId])
    const {currentChannel, isLoading , uploadList} = useSelector(state => state.video)
    const uploadsId = currentChannel?.contentDetails?.relatedPlaylists?.uploads

    console.log(uploadList)
    // const {id, snippet:{customUrl, localized:{ description, title} ,
    // thumbnails: {medium}}, statistics:{subscriberCount ,videoCount,viewCount},
    // contentDetails: {relatedPlaylists: {uploads}}} = currentChannel



  return (
    <>
      {
        currentChannel  ?
        <Container>
          <div className='channel__info'>
            {currentChannel?.snippet?.thumbnails ? <img src={currentChannel.snippet.thumbnails.medium.url} alt="logo" /> :
            <img src='' alt="logo" />}

            <div className='info'>
              {currentChannel?.snippet?.localized ? <h1>{currentChannel.snippet.localized.title}</h1> : <h1>strange things</h1>}
              {currentChannel?.snippet?.customUrl ? <p> {currentChannel.snippet.customUrl}</p> : <p>strange things</p>}
              {currentChannel?.statistics?.subscriberCount ? <p>{currentChannel.statistics.subscriberCount} подписчиков</p> :
              <p>strange things</p>}
              {currentChannel?.statistics?.videoCount ? <p>{currentChannel.statistics.videoCount} видео</p> : <p>strange things</p>}
              {currentChannel?.statistics?.viewCount ? <p>{currentChannel.statistics.viewCount} просмотров</p> : <p>strange things</p>}
              {currentChannel?.snippet?.localized ? <h5>{currentChannel.snippet.localized.description}</h5> : <h1>strange things</h1>}

            </div>
          </div>
          <div className='channel__videos'>
            {uploadList.map((video) => <VideoCard video={video} key={video?.snippet?.resourseId?.videoId}/>)}
          </div>
        </Container>
        :
        <Container>
          <HalfMalf text={"Loading"} bgColor={"#ffffff"} width={"200px"} height={"200px"} center={true} />
        </Container>
      }
    </>
  )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
  .channel__info {
    width: 100%;
    padding: 20px 0;
    display: flex;
    border-bottom: 1px solid #dcdcdc;
    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
    }
    .info {
      padding-left: 30px;
      p {
        margin: 0;
        color: gray;
      }
      h1 {
        margin: 5px 0;
      }
      h5 {
        width: 800px;
      }
    }
  }
  .channel__videos {
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    padding: 20px 0;
    flex-wrap: wrap;
  }
`