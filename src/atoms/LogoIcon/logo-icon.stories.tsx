import React from 'react';
import LogoIcon from '.';

export default {
  title: 'Icon/Logo',
  component: LogoIcon,
};

export const DefaultLogo = () => <div style={{ width: '300px' }}>
  <LogoIcon />
</div>;

export const PremiumLogo = () => <div style={{ width: '300px' }}>
  <LogoIcon logoType="premium" />
</div>;