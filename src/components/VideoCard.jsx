import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiFillEye} from 'react-icons/ai'
import request from '../service/api'
import moment from 'moment'
import numeral from 'numeral'
import { useNavigate } from "react-router";

export default function VideoCard( {video}) {

    const {id, snippet:{channelId , channelTitle, title, publishedAt, thumbnails:{medium}}} = video
    const currentideoId =  video?.contentDetails?.videoId ? video.contentDetails.videoId : id
    const navigate = useNavigate()

    const handleClickVideo = () => {
        navigate(`/watch/${currentideoId}`)
    }
  return (
    <>
        {
            video ?
            <VideoCardContainer onClick={handleClickVideo}>
                <div className='video__image'>
                    <img src={medium.url} alt=''></img>
                    {video?.contentDetails?.duration ? <span>{moment.duration(video.contentDetails.duration).asSeconds()}</span> :<span>3:55</span>  }
                </div>
                <div className='video__name'>
                    <img src={medium?.url} alt=''>
                    </img>
                    <h2 className='video__tittle'>{title}</h2>
                </div>
                <div className='video__details'>

                    {video?.statistics?.viewCount ? <span><AiFillEye/> {numeral(video.statistics.viewCount).format('0.a')} просмотров ·</span> :
                    <span><AiFillEye/> 4875 просмотров ·</span>}
                    <span className='date'>{moment(publishedAt).fromNow()} · </span>
                    <span className='channel__tittle'>{channelTitle} </span>
                </div>
            </VideoCardContainer> :
            <VideoCardContainer>

            </VideoCardContainer>
        }
    </>
  )
}
const VideoCardContainer = styled.div`
    width: 30%;
    margin-bottom: 30px;

    .video__image {
        position: relative;
    }
    .video__image > img {
        border-radius: 10px ;
    }
    .video__image > span {
        position:absolute;
        right: 20px;
        bottom: 20px;
        padding: 7px;
        border-radius: 7px;
        background-color:#000000;
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
    .video__details {
        display: flex;
        flex-wrap: wrap;
    }
    .channel__tittle{
        white-space: normal;
    }
    .video__details > span {
        padding-left: 5px;
        font-weight: 300;
        font-size: 14px;
        color: var(--text-secondary);
    }
`