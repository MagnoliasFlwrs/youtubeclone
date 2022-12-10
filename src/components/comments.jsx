import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import CommentCard from './commentcard'

export default function Comments() {
  return (
    <CommentsWrapper>
      <p>{numeral(10000).format('0.a')} comments</p>
      <div className='input__wrap'>
          <img src="" alt="" />
          <input type="text" placeholder=' add comment' />
      </div>
      <div className='comment__list'>
          {[...Array(10)].map(() => <CommentCard/>)}
      </div>
    </CommentsWrapper>
  )
}
const CommentsWrapper = styled.div`
  width: 100%;
  .input__wrap {
    width: 100%;
    display: flex;
    img {
      border-radius: 50px;
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
    input {
      width: 95%;
      height: 35px;
      border:none;
      border-bottom: 1px solid #dcdcdc;
    }
  }

`