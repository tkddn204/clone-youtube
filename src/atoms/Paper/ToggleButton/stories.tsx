import React from 'react';
import ToggleButton from '.';
import ThumbUpIcon from '../../Icon/ThumbUpIcon';

export default {
  title: 'Atom/Paper/ToggleButton',
  component: ToggleButton,
};

export const DefaultToggleButton = () =>
  <ToggleButton icon={ThumbUpIcon}>
    좋아요
  </ToggleButton>;
