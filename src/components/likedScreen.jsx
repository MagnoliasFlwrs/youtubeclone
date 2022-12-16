import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getLikedVideo } from "../redux/slices/getVideoSlice";
import BigVideoCard from './BigVideoCard'



export default function LikedScreen() {
    const dispath =  useDispatch()
    const {likedVideoList} = useSelector(state => state.video)
    
  useEffect(() => {
      dispath(getLikedVideo())
  },[dispath])
  return (
    <Container>
        {likedVideoList.map((video) => <BigVideoCard video={video} key={video.id}/>)}
    </Container>  
  )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    // overflow-y: scroll;
`