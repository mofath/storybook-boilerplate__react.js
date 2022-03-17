import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Link } from './Link';
import knobData from './link.knobs.json';

const { innerText } = knobData;

export const basicLink = () => (
  <Link href='/' >
    {text(innerText.label, innerText.default, innerText.group)}
  </Link>
);

/* eslint import/no-anonymous-default-export: */
export default {
  decorators: [withKnobs],
  title: 'Link',
};
