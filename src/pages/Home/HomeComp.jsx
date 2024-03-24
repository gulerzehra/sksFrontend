import Hero from './components/Hero/HeroComp';
import Clubs from './components/Clubs/ClubsComp';
import Recents from './components/Recents/RecentsComp';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function HomeComp() {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
      <Clubs />
      <Recents />
    </>
  );
}

export default HomeComp;
