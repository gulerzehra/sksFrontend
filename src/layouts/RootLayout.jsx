import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/HeaderComp';
import Footer from '../components/Footer/FooterComp';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function RootLayout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default RootLayout;
