import React from 'react';
import PropTypes from 'prop-types';
import './link.scss';

/**
 * Primary UI component for user interaction
 */
const Link = ({ children, href, variant }) => {
    return (
      <a href={href} className={`link link--${variant}`}>
        {children}
      </a>
    );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  variant: PropTypes.string,
};

Link.defaultProps = {
  variant: 'primary',
};

export default Link;