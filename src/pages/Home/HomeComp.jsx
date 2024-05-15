import Hero from './components/Hero/HeroComp';
import Clubs from './components/Clubs/ClubsComp';
import Recents from './components/Recents/RecentsComp';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function HomeComp() {
  useDocumentTitle('Home');
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
      <Hero />
      <Clubs />
      <Recents />
    </>
  );
}

export default HomeComp;
