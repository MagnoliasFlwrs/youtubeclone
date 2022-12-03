import styled from "styled-components";
import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryVideo } from "../redux/slices/getVideoSlice";


const keywords = [
    'All',
    'беременна в 16',
    'new year songs',
    'js',
    'react',
    'cats',
    'funny',
    'fitness',
    'music'
]
export default function () {
    const [activeElement , setActiveElement] = useState('All')
    const dispath = useDispatch()
    const handleClick = value => {
        setActiveElement(value)
        dispath(getCategoryVideo(value))
    }
  return (
    <SearchBar>
        {
            keywords.map((value,i) => (<span onClick={() => handleClick(value)} key= {i} className={ activeElement === value ? 'search__card__active' : 'search__card'} > {value} </span>) )
        }
    </SearchBar>
  )
}
const SearchBar = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    padding-bottom: 20px;
    .search__card {
        padding: 5px 15px;
        border-radius: 7px;
        background-color: #dcdcdc;
    }
    .search__card__active {
        padding: 5px 15px;
        border-radius: 7px;
        background-color: #000000;
        color: #ffffff;
    }
`