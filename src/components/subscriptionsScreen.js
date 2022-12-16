import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getLikedVideo } from "../redux/slices/getVideoSlice";
import ChannelCard from './channelcard'



export default function SubscriptionsScreen() {
    const dispath =  useDispatch()
    const {subscriptionsList} = useSelector(state => state.video)
    
  useEffect(() => {
      dispath(getLikedVideo())
  },[dispath])
  return (
    <Container>
        {subscriptionsList.map((video) => <ChannelCard video={video} key={video.id}/>)}
    </Container>  
  )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    // overflow-y: scroll;
`