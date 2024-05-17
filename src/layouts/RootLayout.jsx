import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/HeaderComp';
import Footer from '../components/Footer/FooterComp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  min-height: calc(100vh - (80px + 40px));
`;

function RootLayout() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return (
      <p>
        You must be logged in to view this page. Please{' '}
        <Link to="/login" style={{ color: 'blue' }}>
          click here to login
        </Link>
      </p>
    );
  }

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
