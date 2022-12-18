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
import { useState } from 'react'
import addCommentService from '../service/addCommentService'


export default function Comments() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const profile = localStorage.getItem('profile')
  const _profile = JSON.parse(profile)
  const {commentList , isLoading } = useSelector(state => state.video)
  const [value, setValue] = useState('')

  useEffect(()=> {
    dispatch(getCommentList(id))
  },[dispatch,id])

  const addComment = (e) => {
    if (e.keyCode === 13) {
      addCommentService.addComment(id,value)
      setValue('')
      setTimeout(()=> dispatch(getCommentList(id)),2000)   }
  }

  return (
    <>
      {

        <CommentsWrapper>
          <div className='input__wrap'>
              <img src={_profile.picture} alt="" />
              <input onKeyDown={addComment} value={value} onChange={e =>setValue(e.target.value)} type="text" placeholder=' add comment' />
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
      &&:focus {
        border: none;
        outline: none;
      }
    }
  }

`