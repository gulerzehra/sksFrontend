import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/HeaderComp';
import Footer from '../components/Footer/FooterComp';

const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const OutletAlign = styled.div`
  min-height: calc(100vh - (80px + 40px));
`;

function RootLayout() {
  return (
    <>
      <Container>
        <Header />
        <OutletAlign>
          <Outlet />
        </OutletAlign>
        <Footer />
      </Container>
    </>
  );
}

export default RootLayout;
