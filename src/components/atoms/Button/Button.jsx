import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

Button.propTypes = {};

Button.defaultProps = {};
