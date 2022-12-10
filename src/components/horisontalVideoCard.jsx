import React from 'react'
import styled from 'styled-components'
import {AiFillEye} from 'react-icons/ai'
import request from '../service/api'
import moment from 'moment'
import numeral from 'numeral'

export default function HorisontalVideoCard() {
  return (
    <VideoCardContainer>
        <div className='video__image'>
            <img src='' alt=''></img>
            <span>3:55</span>
        </div>
        <div className='wrap'>
        <div className='video__name'>
            <h2 className='video__tittle'>video tittle</h2>
        </div>
        <div className='video__details'>
            <span className='channel__tittle'>channel tittle </span>
            <div className='video__detail'>
                <span>
                    <AiFillEye/> 4875 просмотров ·
                </span>
                <span className='date'> · </span>
            </div>
        </div>
        </div>
    </VideoCardContainer>

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