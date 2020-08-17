import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Size {
  width: number;
  height: number;
}

const ScreenSizeSlice = createSlice({
  name: 'screenSize',
  initialState: { width: 0, height: 0 },
  reducers: {
    setSize: (state, action: PayloadAction<Size>) => action.payload
  }
});

const {actions: ScreenSizeActions, reducer: ScreenSizeReducer} = ScreenSizeSlice;
export const {setSize} = ScreenSizeActions;
export default ScreenSizeReducer;