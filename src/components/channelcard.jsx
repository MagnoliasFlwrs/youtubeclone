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
    const navigate = useNavigate()

  const {
    video: {
      id,
      contentDetails: {totalItemCount},
      snippet: {
        title,
        description,
        publishedAt,
        resourceId:{channelId},
        thumbnails: { medium },
      },
    },
  } = video;
const handleClick = () => {
    navigate(`/channel/${channelId}`)
}
  
  return (
    <>
      {video ? (
        <VideoCardContainer onClick={handleClick} >
          <div className="video__image">
            <img src={medium?.url} alt=""></img>
          </div>
          <div className="wrap">
            <div className="video__name">
                <h2 className="video__tittle">{title}</h2> 
            </div>
            <div className="video__details">
              <div className="video__detail">
                <span className="videoCount">{totalItemCount} видео</span>
                <span className="date"> {moment(publishedAt).fromNow()} </span>
            </div>
                <ShowMoreText
                lines={3}
                more=""
                less=""
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                width={1000}
                truncatedEndingComponent={"... "}
              >
                <span className="description">{description}</span>
              </ShowMoreText>
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
    padding: 20px;
    display: flex;
    border-bottom: 1px solid #dcdcdc;
    
    .wrap {
        width: 70%;
    }
    .video__image {
        position: relative;
        margin-right:30px;

    }
    .video__image > img {
        border-radius: 50% ;
        height:80%
        
    }
    .video__detail {
        margin: 0 0 5px
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
    }
    /* .video__details {
        display: flex;
        flex-wrap: wrap;
    } */
    .channel__tittle{
        white-space: normal;
    }
    .video__details > span , .video__detail > span {
        font-weight: 300;
        font-size: 14px;
        color: gray;
    }
    .description {
        margin : 15px 0;
    }
`;
