import React from 'react';
import Drawer from '.';
import { withKnobs, boolean } from "@storybook/addon-knobs";
// import {AppDispatch} from "../../store";
// import {useDispatch} from "react-redux";

export default {
  title: 'Molecule/Drawer',
  component: Drawer,
  decorators: [ withKnobs ]
};

export const DefaultDrawer = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const isOpen = boolean('Open', false);
  // dispatch(toggleDrawer());
  return <Drawer />
}