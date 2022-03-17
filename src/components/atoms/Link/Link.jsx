import React from 'react';
import PropTypes from 'prop-types';
import './link.scss';
import Icon from '../Icon/Icon';
/**
 * Primary UI component for user interaction
 */
export const Link = ({ children, href, variant, icon }) => {
    return (
      <a href={href} className={`link link--${variant}`}>
        {icon && <Icon name={icon} />}
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
