import { Link } from 'react-router-dom';
import { Footer, FooterText } from './FooterComp-styled';

function FooterComp() {
  return (
    <Footer>
      <FooterText>
        <Link to="/">About us</Link> · <Link to="/">Contact with us</Link> ·{' '}
        <Link to="/">Our Social Media</Link> ·{' '}
        <Link to="/">Privacy Policies</Link>
      </FooterText>
    </Footer>
  );
}

export default FooterComp;
