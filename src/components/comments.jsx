import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import CommentCard from './commentcard'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCommentList } from '../redux/slices/getVideoSlice'
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Comments() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {commentList , isLoading } = useSelector(state => state.video)

  useEffect(()=> {
    dispatch(getCommentList(id))
  },[dispatch,id])
  return (
    <>
      {
        
        <CommentsWrapper>
          <p>{numeral(10000).format('0.a')} comments</p>
          <div className='input__wrap'>
              <img src="" alt="" />
              <input type="text" placeholder=' add comment' />
          </div>
          <div className='comment__list'>
              {commentList.map((comment) => <CommentCard comment={comment} key={comment.id}/>)}
          </div>
        </CommentsWrapper> 
        
      }
    </>
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