import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/HeaderComp';
import Footer from '../components/Footer/FooterComp';

const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  min-height: calc(100vh - (80px + 40px));
`;

function RootLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default RootLayout;
