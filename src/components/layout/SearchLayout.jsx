import React, { useEffect } from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getCategoryVideo } from "../../redux/slices/getVideoSlice";
import BigVideoCard from '../BigVideoCard'



export default function SearchLayout() {
    const {query} = useParams()
    const dispath =  useDispatch()
    const {videoList} = useSelector(state => state.video)
    
  useEffect(() => {
      dispath(getCategoryVideo(query))
  },[dispath,query])
  return (
    <Container>
        {videoList.map((video) => <BigVideoCard video={video} key={video.id}/>)}
    </Container>  
  )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`
