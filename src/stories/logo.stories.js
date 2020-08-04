import React from 'react';
import {
  action
} from '@storybook/addon-actions';
import Logo from '../components/icons/Logo';

export default {
  title: 'Icon/Logo',
  component: Logo,
};

export const DefaultLogo = () => <div style={
  {
    width: '300px'
  }
}>
  <Logo onClick={
    action('clicked')
  }
  /> </div>;

export const PremiumLogo = () => <div style={
  {
    width: '300px'
  }
}>
  <Logo logoType="premium"
    onClick={
      action('clicked')
    }
  /> </div>;