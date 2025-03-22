import React from 'react';
import styled from '@emotion/styled';
import Navbar from './Navbar';
import Footer from './Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

function Layout({ children }) {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default Layout;
