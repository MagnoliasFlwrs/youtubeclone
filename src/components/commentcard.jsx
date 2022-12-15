import React from 'react'
import styled from 'styled-components'
import { BiLike , BiDislike } from 'react-icons/bi'
import numeral from 'numeral'
import moment from 'moment'
import ShowMoreText from "react-show-more-text"
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


export default function CommentCard(comment) {
    const {comment:{snippet : {topLevelComment : {snippet:{authorDisplayName , authorProfileImageUrl, textDisplay, publishedAt, likeCount} }}}} =  comment
  return (
    <>
        {
            <CommentCardContainer>
            <img src={authorProfileImageUrl} alt="" />
            <div>
                <div className='card__wrap'>
                    <span>{authorDisplayName}</span>
                    <span>{moment(publishedAt).fromNow()}</span>
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
                    <p>{textDisplay}</p>
                </ShowMoreText>
                <div className='comment__likes'>
                    <span><BiLike/> {numeral(likeCount).format('0.a')} </span>   <BiDislike/>
                </div>
            </div>
            </CommentCardContainer>
            

    }
    </>
  )
}
const CommentCardContainer = styled.div`
    width: 100%;
    padding: 30px 0 0;
    display: flex;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        margin-right: 20px;
    }
    .card__wrap {
        span {
        margin-right: 10px;
    }
    }
`