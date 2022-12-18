import React from 'react'
import styled from 'styled-components'
import { BiLike , BiDislike } from 'react-icons/bi'
import numeral from 'numeral'
import moment from 'moment'
import ShowMoreText from "react-show-more-text"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoChannelDetails } from '../redux/slices/getVideoSlice'
import { getSubscribeStatus } from '../redux/slices/getVideoSlice'
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';
import likeService from '../service/likeService'

export default function VideoDetails( {selectedVideo ,videoId}) {
    const {snippet: {channelId , description, channelTitle, title, publishedAt} , statistics:{viewCount, likeCount, commentCount}} = selectedVideo
    const dispatch = useDispatch()

    const {subscribeStatus , currentChannel } = useSelector(state => state.video)
    const {snippet:channelSnippet , statistics: channelStatistics} = currentChannel


    useEffect(()=> {
        dispatch(getVideoChannelDetails(channelId))
        dispatch(getSubscribeStatus(channelId))
    },[dispatch,channelId])

    const handleSubscribe = () => {

    }
    const setLike = (videoId) => {
        likeService(videoId)
    }
  return (
    <>
        {
            currentChannel && subscribeStatus ?
            <VideoDetailsContainer >
                <h2>{title}</h2>
                <div className='info__details'>
                    <div className='channel__info'>
                        <img src={channelSnippet?.thumbnails?.default?.url} alt="" />
                        <div className='followers'>
                            <h3>{channelTitle}</h3>
                            <p> {numeral(channelStatistics?.subscriberCount).format('0.a')} подписчиков</p>
                        </div>
                        <button className={ subscribeStatus.length===0 ? 'black__btn' : 'gray__btn'} onClick={handleSubscribe}>{subscribeStatus.length===0? 'Подписаться' : 'Вы подписаны'}</button>
                    </div>
                    <div className='liked'>
                        <div className='like__wrap' onClick = {setLike}>
                            <BiLike/> {numeral(likeCount).format('0.a')}
                        </div>
                        <div className='like__wrap sec'>
                            <BiDislike/>
                        </div>

                    </div>
                </div>
                <div className='description'>
                    <div className='span__wrapper'>
                        <span>{numeral(viewCount).format('0.a')} просмотров</span>
                        <span> {moment(publishedAt).fromNow()}</span>
                    </div>
                    <ShowMoreText
                        lines={3}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="show-more-less-clickable"
                        expanded={false}
                        width={280}
                        truncatedEndingComponent={"... "}>

                        <p className='descr'>{description}
                        </p>
                    </ShowMoreText>
                </div>
                <p>{numeral(commentCount).format('0.a')} comments</p>
                <div>

                </div>
            </VideoDetailsContainer>
            :
            <VideoDetailsContainer>
                <HalfMalf text={"Loading"} bgColor={"#ffffff"} width={"200px"} height={"200px"} center={true} />
            </VideoDetailsContainer>
        }
    </>
  )
}
const VideoDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .info__details {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .channel__info {
        display: flex;
        align-items: center;
        width: 55%;
    }
    .channel__info > img  {
        border-radius: 50px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
    .followers {
        display: flex;
        flex-direction: column;
        h3 {
            margin: 0;
        }
        p {
            margin: 0;
        }
    }
    .black__btn {
        width: 200px;
        height: 40px;
        border-radius: 20px;
        background-color: #000000;
        color: #ffffff;
        border: none;
        text-align: center;
        margin-left: 20px;
    }
    .gray__btn {
        width: 200px;
        height: 40px;
        border-radius: 20px;
        border: none;
        color: #000000;
        background-color: #dcdcdc;
        text-align: center;
        margin-left: 20px;
    }
    .liked {
        width: 200px;
        height: 40px;
        background-color: #dcdcdc;
        border-radius:20px;
        display: flex;
    }
    .like__wrap {
        border-right: 1px solid #bdbdbd;
        width: 70%;
        padding: 11px 0 0 35px;
        border-radius: 20px 0 0 20px;
        &:hover {
            background-color: #bdbdbd;
        }
    }
    .sec {
        width: 30%;
        border-right:none;
        padding: 11px 0 0 25px;
        border-radius: 0 20px 20px 0;
        &:hover {
            background-color: #bdbdbd;
        }
    }
    .description {
        width: 100%;
        margin-top: 20px;
        background-color: #dcdcdc;
        border-radius: 20px;
        padding: 10px;
        &:hover {
            background-color: #bdbdbd;
        }
    }
`