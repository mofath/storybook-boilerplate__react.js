import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import Icon from '../Icon/Icon';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, href, onClick, variant, icon }) => {
  if (href)
    return (
      <a href={href} className={`button button--${variant}`}>
        {icon && <Icon name={icon} />}
        {children}
      </a>
    );

  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
};
