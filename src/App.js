import { useEffect } from "react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import LoginLayout from "./components/layout/LoginLayout";
import MainLayout from "./components/layout/MainLayout";
import HomeVideoScreen from "./components/HomeVideoScreen";
import { useSelector } from "react-redux";
import ViewVideoLayout from "./components/layout/ViewVideoLayout";
import SearchLayout from "./components/layout/SearchLayout";
import LikedScreen from './components/likedScreen'
import SubscriptionsScreen from './components/subscriptionsScreen'
import ChannelScreen from './components/channelScreen'


export const ThemeContext = React.createContext(null)

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken')
  useEffect(() => {
    if (!token) {
      navigate("auth");
    }
  }, [token]);
  const theme = localStorage.getItem('theme')
  const isDark = (theme==='dark')
  useEffect(() => {

  },[theme])

  return (
        <div className="app" id={isDark ? 'dark' : 'light'}>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomeVideoScreen />} />
          <Route path="search/:query" element={<SearchLayout />} />
          <Route path="liked" element={<LikedScreen />} />
          <Route path="subscriptions" element={<SubscriptionsScreen />} />
          <Route path="channel/:channelId" element={<ChannelScreen/>} />
        </Route>
        <Route path="watch/:id" element={<ViewVideoLayout />} />
        <Route path="auth" element={<LoginLayout />} />
      </Routes>
      </div>
  );
}

export default App;
