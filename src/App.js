import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import LoginLayout from "./components/layout/LoginLayout";
import MainLayout from "./components/layout/MainLayout";
import HomeVideoScreen from "./components/HomeVideoScreen";
import { useSelector } from "react-redux";
import ViewVideoLayout from "./components/layout/ViewVideoLayout";





function App() {
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)
  useEffect(() => {
    if(!token) {
      navigate('auth')
    }
  },[token])
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomeVideoScreen />} />
          <Route path="search" element={<h1>search</h1>} />
        </Route>
        <Route path="watch/:id" element={<ViewVideoLayout/>}/>
        <Route path="auth" element={<LoginLayout />} />
    </Routes>
  );
}


export default App;
