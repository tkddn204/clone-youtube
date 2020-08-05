import React from 'react';
import {DefaultLogoIcon, PremiumLogoIcon} from '.';

export default {
  title: 'Icon/Logo',
  component: [DefaultLogoIcon, PremiumLogoIcon],
};

export const DefaultLogo = () => <div style={{width: '300px'}}>
  <DefaultLogoIcon/>
</div>;

export const PremiumLogo = () => <div style={{width: '300px'}}>
  <PremiumLogoIcon/>
</div>;