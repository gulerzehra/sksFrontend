import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from './Button-styled';

function ButtonComp({ children, linkTo, size, variation }) {
  const _buttonComp = (
    <Button size={size} variation={variation}>
      {children}
    </Button>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="content-button">
        {_buttonComp}
      </Link>
    );
  }

  return _buttonComp;
}

ButtonComp.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variation: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export default ButtonComp;
