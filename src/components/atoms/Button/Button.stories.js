import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export const text = () => {
    return <Button onClick={action('clicked')}>Click me</Button>;
};

export const emoji = () => {
    return (
        <Button onClick={action('clicked')}>
            <span>😅 😂 🤣</span>
        </Button>
    );
};

/* eslint import/no-anonymous-default-export: */
export default {
    component: Button,
    title: 'Button',
};
