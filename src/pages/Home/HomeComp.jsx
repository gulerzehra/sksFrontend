import { useEffect } from 'react';
import Hero from './components/Hero/HeroComp';
import Clubs from './components/Clubs/ClubsComp';
import Recents from './components/Recents/RecentsComp';

function HomeComp() {
  useEffect(() => {
    document.title = 'Home | Künefe SKS';
  }, []);

  return (
    <>
      <Hero />
      <Clubs />
      <Recents />
    </>
  );
}

export default HomeComp;
