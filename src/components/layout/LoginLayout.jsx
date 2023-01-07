import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import { useState } from 'react';
import { Switch } from '@mui/material';




const SCOPES = 'https://www.googleapis.com/auth/youtube.force-ssl'

export default function LoginLayout() {
  localStorage.setItem('theme' , 'light')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user,setUser] = useState({})
  const [tokenClient ,setTokenClient] = useState({})

  let client

  const handleCallBackResponse =(response) => {
    const userProfile = jwt_decode(response.credential)
    setUser(userProfile)
    localStorage.setItem('profile', JSON.stringify(userProfile))
    console.log(userProfile)

    client.requestAccessToken();


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
      {theme: 'outline' , size: 'large' }
    )
    // setTokenClient(google.accounts.oauth2.initTokenClient({
    //   client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    //   scope: SCOPES,
    //   callback: (tokenResponse) => {
    //     const token = tokenResponse.access_token
    //     localStorage.setItem('authToken', token)
    //     navigate('/')
    //   }
    // }))
      client = google.accounts.oauth2.initTokenClient({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: (tokenResponse) => {
        const token = tokenResponse.access_token
        localStorage.setItem('authToken', token)
        navigate('/')
      },
      scope: SCOPES,
    });
  }, [])

  // const [theme , setTheme] = useState('light')
  // const [checked, setChecked] = useState(true)
  // localStorage.setItem('theme', theme)
  // const handleChange = () => {
  //   if (theme === 'light') {
  //     setTheme('dark')
  //     setChecked(false)
  //   } else {
  //     setTheme('light')
  //     setChecked(true)
  //   }
  // }
  return (
    <div>
        <LoginContainer>
            <div className='wrapper__login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" width={450} height={150}/>
            <div  id='signInDiv'></div>
            {/* <button  onClick={signIn}> Authorizate with google</button> */}
            {/* <div className='theme__toggle'>
                <h2>Light Theme</h2>
                <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div> */}
            </div>
        </LoginContainer>
    </div>
  )
}
const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    .wrapper__login {
      padding: 30px;
      display: flex;
      flex-direction: column;
      row-gap: 50px;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      box-shadow: -3px 1px 16px 0px rgba(34, 60, 80, 0.2);
    }
      button {
          width: 200px;
          height: 50px;
          border: none;
          background-color: #aa9b9b;
          color: #000000;
          border-radius: 7px;
      }
      .theme__toggle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
`
