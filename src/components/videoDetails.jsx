import React from 'react'
import styled from 'styled-components'
import { BiLike , BiDislike } from 'react-icons/bi'

export default function VideoDetails() {
  return (
    <VideoDetailsContainer>
        <h1>video tittle</h1>
        <div className='info__details'>
            <div className='channel__info'>
                <img src="" alt="" />
                <div className='followers'>
                    <h2> channel name</h2>
                    <span> followers</span>
                </div>
                <button>Follow</button>
            </div>
            <div className='liked'>
                <div className='like__wrap'>
                    <BiLike/> count
                </div>
                <BiDislike/>
            </div>
        </div>
        <div>

        </div>
    </VideoDetailsContainer>
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
    }
    .followers {
        display: flex;
        flex-direction: column;
    }
    button {
        width: 200px;
        height: 40px;
        border-radius: 7px;
        background-color: #000000;
        color: #ffffff;
        text-align: center;
    }
    .liked {
        width: 150px;
        height: 40px;
        background-color: #dcdcdc;
        border-radius:7px;

    }
    .like__wrap {
        border-right: 1px solid #616161;
    }
`