import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Button } from './Button';
import knobData from './button.knobs.json';

const { icon, innerText } = knobData;

const buttonClicked = (e) => {
  e.preventDefault();
  alert('Hello');
};

export const basicButton = () => (
  <Button onClick={action('clicked')}>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
);

export const secondaryButton = () => (
  <Button variant='secondary'>
    {text(innerText.label, 'Secondary button', innerText.group)}
  </Button>
);

export const tertiaryButton = () => (
  <Button variant='tertiary'>
    {text(innerText.label, 'Tertiary button', innerText.group)}
  </Button>
);

export const iconButton = () => (
  <Button icon='user'>
    {text(innerText.label, 'Icon button', innerText.group)}
  </Button>
);

export const functionButton = () => (
  <Button onClick={buttonClicked}>
    {text(innerText.label, 'Function button', innerText.group)}
  </Button>
);

export const linkedButton = () => (
  <Button href='/route'>
    {text(innerText.label, 'Link button', innerText.group)}
  </Button>
);

/* eslint import/no-anonymous-default-export: */
export default {
  component: Button,
  decorators: [withKnobs],
  title: 'Button',
};
