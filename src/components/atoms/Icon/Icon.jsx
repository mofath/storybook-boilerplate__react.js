import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

import { ReactComponent as IconPlus } from '../../../assets/plus.svg';
import { ReactComponent as IconCart } from '../../../assets/cart.svg';
import { ReactComponent as IconUser } from '../../../assets/user.svg';

const icons = {
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
};

const Icon = ({ name }) => {
  const IconElement = icons[name];

  if (IconElement === undefined) return null;

  return (
    <span className='icon'>
      <IconElement />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
