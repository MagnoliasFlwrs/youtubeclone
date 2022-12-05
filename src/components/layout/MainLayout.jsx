import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import ContainerForHeader from '../ContainerForHeader'
import Flex from '../Flex'
import Sidebar from '../sidebar'



export default function MainLayout() {
  return (
    <div className="app">
    <MainContainer>
      <header>
        <ContainerForHeader/>
      </header>
      <Flex>
        <Sidebar/>
        <Outlet/>
        <Link to="search">Search</Link>
      </Flex>
    </MainContainer>
  </div>
  )
}
const MainContainer = styled.main`
  width: calc(1400px + 16px*2);
  padding: 0 16px;
  margin: 0 auto;
`
