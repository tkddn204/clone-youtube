import React from 'react';
import {
  action
} from '@storybook/addon-actions';
import Guide from '../components/icons/Guide';

export default {
  title: 'Icon/Guide',
  component: Guide,
};

export const DefaultGuide = () => <div style={{ width: '24px' }}>
  <Guide onClick={action('clicked')} />
</div>;