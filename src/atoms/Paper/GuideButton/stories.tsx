import React from 'react';
import GuideButton from '.';
import {HomeIcon} from "../../Icon";

export default {
  title: 'Atom/Paper/GuideButton',
  component: GuideButton,
};

export const DefaultGuideButton = () => <GuideButton
    link="/"
    icon={<HomeIcon />}
    title="홈" />;
