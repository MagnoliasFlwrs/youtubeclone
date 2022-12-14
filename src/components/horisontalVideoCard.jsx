import React from 'react'
import styled from 'styled-components'
import {AiFillEye} from 'react-icons/ai'
import { useNavigate } from "react-router";
import request from '../service/api'
import moment from 'moment'
import numeral from 'numeral'
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import ShowMoreText from "react-show-more-text"

export default function HorisontalVideoCard(video) {
    console.log(video.video.snippet)
    const {video : {id, snippet: {channelTitle , title , publishedAt , thumbnails:{medium}}}} = video
    
    const currentideoId = id?.videoId || id
    const navigate = useNavigate()
    const handleClickVideo = () => {
        navigate(`/watch/${currentideoId}`)
    }
  return (
    <>
    {
        video?
        <VideoCardContainer onClick={handleClickVideo}>
        <div className='video__image'>
            <img src={medium?.url} alt=''></img>
            <span>3:55</span>
        </div>
        <div className='wrap'>
        <div className='video__name'>
            <ShowMoreText
                lines={2}
                more=""
                less=""
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                width={200}
                truncatedEndingComponent={"... "}>
                <h2 className='video__tittle'>{title}</h2>
            </ShowMoreText>
        </div>
        <div className='video__details'>
            <span className='channel__tittle'>{channelTitle} </span>
            <div className='video__detail'>
                <span>
                    <AiFillEye/> 4875 просмотров ·
                </span>
                <span className='date'> {moment(publishedAt).fromNow()} </span>
            </div>
        </div>
        </div>
    </VideoCardContainer>:
    <VideoCardContainer>
        <HalfMalf text={"Loading"} bgColor={"#ffffff"} width={"200px"} height={"200px"} center={false} />
    </VideoCardContainer>
    }
    </>

)
}
const VideoCardContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;

    .video__image {
        position: relative;
    }
    .video__image > img {
        border-radius: 10px ;
        width: 200px;
        height: 100px;
        margin-right:15px;
    }
    .video__image > span {
        position:absolute;
        right: 20px;
        bottom: 20px;
        padding: 7px;
        border-radius: 7px;
        background-color: #000000;
        color: #ffffff;
        font-size: 10px;
        font-weight: 600;
    }
    .video__name {
        display: flex;
        align-items: center;
    }
    .video__name > img {
        border-radius: 50px;
        width: 40px;
        height: 40px;
    }
    .video__tittle {
        font-size: 16px;
        margin-left: 10px;
    }
    /* .video__details {
        display: flex;
        flex-wrap: wrap;
    } */
    .channel__tittle{
        white-space: normal;
    }
    .video__details > span , .video__detail > span {
        padding-left: 5px;
        font-weight: 300;
        font-size: 14px;
        color: gray;
    }
`