import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideo } from '../redux/slices/getVideoSlice';
import VideoCard from './VideoCard';
import SearchBar from './searchBar';
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'



export default function HomeVideoScreen() {
  const {videoList ,isLoading} = useSelector(state => state.video)

  const dispath = useDispatch()
  useEffect ( () => {
    dispath(getPopularVideo())
  },[dispath])
  return (
    <>
      {
        !isLoading?
        <VideoContainer>
          <SearchBar/>
          {videoList?.map((video) => (<VideoCard video={video} key={video.id}> </VideoCard>))}
      </VideoContainer>
      :
        <VideoContainer>
          <HalfMalf text={"Loading"} bgColor={"#ffffff"} width={"200px"} height={"200px"} center={true} />
        </VideoContainer>
      }
    </>
  )
}
const VideoContainer = styled.div`
    width: 80%;
    height: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    padding: 0 20px;
    flex-wrap: wrap;

`