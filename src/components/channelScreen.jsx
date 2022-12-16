import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getVideoChannelDetails } from "../redux/slices/getVideoSlice";
import { useParams } from 'react-router-dom';



export default function ChannelScreen() {
    const {channelId}= useParams()
    const dispath =  useDispatch()
    const {currentChannel} = useSelector(state => state.video)
    console.log(currentChannel)
    
  useEffect(() => {
      dispath(getVideoChannelDetails(channelId))
  },[dispath, channelId])
  return (
    <Container>
        
    </Container>  
  )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    // overflow-y: scroll;
`