import React, { useEffect } from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router";
import moment from "moment";
import numeral from "numeral";
import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from 'react-redux'


export default function ChannelCard(video) {


  const {
    video: {
      id,
      snippet: {
          channelId,
        channelTitle,
        title,
        description,
        publishedAt,
        thumbnails: { medium },
      },
    },
  } = video;
const dispatch = useDispatch()
  const currentideoId = id?.videoId || id;
  const navigate = useNavigate();
  
  return (
    <>
      {video ? (
        <VideoCardContainer >
          <div className="video__image">
            <img src={medium?.url} alt=""></img>
            <span>3:55</span>
          </div>
          <div className="wrap">
            <div className="video__name">
                <h2 className="video__tittle">{title}</h2> 
            </div>
            <div className="video__details">
              <span className="channel__tittle">{channelTitle} </span>
              <div className="video__detail">
                <span>
                  <AiFillEye /> {numeral(10000).format('0.a')}
                </span>
                <span className="date"> {moment(publishedAt).fromNow()} </span>
                <ShowMoreText
                lines={3}
                more=""
                less=""
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                width={700}
                truncatedEndingComponent={"... "}
              >
                <span className="description">{description}</span>
              </ShowMoreText>
              </div>
            </div>
          </div>
        </VideoCardContainer>
      ) : (
        <VideoCardContainer>
          <HalfMalf
            text={"Loading"}
            bgColor={"#ffffff"}
            width={"200px"}
            height={"200px"}
            center={false}
          />
        </VideoCardContainer>
      )}
    </>
  );
}
const VideoCardContainer = styled.div`
    width: 100%;
    height: 200px;
    padding-bottom: 20px;
    display: flex;
    .wrap {
        width: 70%;
    }
    .video__image {
        position: relative;
        margin-right:30px;
        width: 400px;
        height: 200px;
        border-radius: 10px ;
    }
    .video__image > img {
        border-radius: 10px ;
        object-fit:cover;
        width:100%;
        height:100%
        
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
    .description {
        margin : 15px 0;
    }
`;
