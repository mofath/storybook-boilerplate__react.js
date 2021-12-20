import React from 'react';
import PropTypes from 'prop-types';

import IconPlus from '../../../assets/plus.svg';
import IconCart from '../../../assets/cart.svg';
import IconUser from '../../../assets/user.svg';

const icons = {
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
};

const Icon = ({ name }) => {
  const IconElement = icons[name];

  if (IconElement === undefined) return null;

  return (
    <span>
      <IconElement />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;