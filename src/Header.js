import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { children } = props;
  return (
    <div id="header" className="_header">
      {children}
    </div>
  );
};

Header.defaultProps = {
  children: 'RocketBook',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
