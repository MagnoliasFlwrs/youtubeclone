import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn, getProfile } from '../../redux/slices/authSlice';

import { GoogleAuthProvider , getAuth , signInWithPopup } from "firebase/auth";
import { app } from '../../firebase'
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import { useState } from 'react';

const SCOPES = 'https://www.googleapis.com/auth/youtube.force-ssl'

export default function LoginLayout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user,setUser] = useState({})
  const [tokenClient ,setTokenClient] = useState({})


  // const loginHandler = async () => {
  //   const auth = getAuth(app);
  //   const provider = new GoogleAuthProvider();
  //   provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
  //   await signInWithPopup(auth, provider)
  //   .then((result) => {

  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     const profile = {
  //       userName: result.user.displayName,
  //       userPhoto: result.user.photoURL
  //     }
  //     dispatch(logIn({
  //       isAuth: true,
  //       id: auth.uid,
  //       token: token,
  //     }));
  //     dispatch(getProfile({
  //       profile: profile
  //     }))
  //     localStorage.setItem('authToken', token)
  //     localStorage.setItem('userProfile', JSON.stringify(profile))
  //     navigate('/')

  // }).catch((error) => {
  //   console.log(error);
  // });
  // }

  const handleCallBackResponse =(response) => {
    const userProfile = jwt_decode(response.credential)
    setUser(userProfile)
    localStorage.setItem('profile', JSON.stringify(userProfile))
    console.log(userProfile)
  }
  const signIn = () => {
    tokenClient.requestAccessToken()
  }
  useEffect(() => {
    const google = window.google

    google.accounts.id.initialize( {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallBackResponse,
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: 'outline' , size: 'large'}
    )
    setTokenClient(google.accounts.oauth2.initTokenClient({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: SCOPES,
      callback: (tokenResponse) => {
        const token = tokenResponse.access_token
        localStorage.setItem('authToken', token)
        navigate('/')
      }
    }))
  }, [])



  // const client = window.google.accounts.oauth2.initCodeClient({
  //   client_id: 'process.env.REACT_APP_GOOGLE_CLIENT_ID',
  //   scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
  //   ux_mode: 'redirect',
  //   redirect_uri: "https://localhost:3000",
  // });
  return (
    <div>
        <LoginContainer>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" width={450} height={150}/>
            <div  id='signInDiv'></div>
            <button onClick={signIn}>Authorize with Google</button>
        </LoginContainer>
    </div>
  )
}
const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    justify-content: center;
    align-items: center;
    button {
        width: 200px;
        height: 50px;
        border: none;
        background-color: #aa9b9b;
        color: #000000;
        border-radius: 7px;
    }
`
