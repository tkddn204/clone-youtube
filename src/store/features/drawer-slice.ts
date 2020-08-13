import {createSlice} from '@reduxjs/toolkit';

const DrawerSlice = createSlice({
  name: 'drawerState',
  initialState: false,
  reducers: {
    openDrawer: (state) => true,
    closeDrawer: (state) => false,
    toggleDrawer: (state) => !state
  }
});

const {actions: drawerActions, reducer: drawerReducer} = DrawerSlice;
export const {openDrawer, closeDrawer, toggleDrawer} = drawerActions;
export default drawerReducer;