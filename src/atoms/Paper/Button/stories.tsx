import React from 'react';
import Button from '.';
import {HomeIcon} from "../../Icon";

export default {
  title: 'Atom/Paper/Button',
  component: Button,
};

export const DefaultButton = () => <Button icon={HomeIcon}>홈</Button>;
