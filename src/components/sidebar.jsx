import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiTwotoneHome, AiFillLike } from 'react-icons/ai';
import {MdOutlineSubscriptions} from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logOut } from "../redux/slices/authSlice";



function Sidebar() {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        const auth = getAuth();
        localStorage.removeItem('authToken')
        localStorage.removeItem('userProfile')
        signOut(auth).then(() => {
            dispatch(logOut({
                isAuth: false,
                id: null,
                token: null,
                profile:null,
            }))
        }).catch((error) => {
            console.log(error)
});
    }
    return (
        <ColumnContainer>
            <LinkWrapper>
                <NavLink to=""><AiTwotoneHome/> Главная</NavLink>
            </LinkWrapper>
            <LinkWrapper>
                <NavLink to=""><MdOutlineSubscriptions/> Подписки</NavLink>
            </LinkWrapper>
            <LinkWrapper>
                <NavLink to=""><AiFillLike/> Понравилось</NavLink>
            </LinkWrapper>
            <LinkWrapper>
                <NavLink to=""><BsClockHistory/>  История</NavLink>
            </LinkWrapper>
            <LinkWrapper>
                <NavLink to="" onClick={logOutHandler}><CiLogout/> Выйти</NavLink>
            </LinkWrapper>
        </ColumnContainer>
    )


}
const ColumnContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
`
const LinkWrapper = styled.div`
    padding: 15px 0;
    a{
        text-decoration: none;
        color: #000000;
    }
`
export default Sidebar