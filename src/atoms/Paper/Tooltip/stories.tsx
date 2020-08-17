import React from 'react';
import Tooltip from '.';
import IconButton from "../IconButton";
import {ProfileIcon} from "../../Icon";

export default {
  title: 'Atom/Tooltip',
  component: Tooltip,
};

export const DefaultTooltip = () => <Tooltip content="프로필">
  <IconButton icon={ProfileIcon} />
</Tooltip>