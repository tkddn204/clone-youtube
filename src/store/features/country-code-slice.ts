import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const CountryCodeSlice = createSlice({
  name: 'countryCode',
  initialState: navigator.language ? navigator.language.slice(-2) : '',
  reducers: {
    setCode: (state, action: PayloadAction<string>) => action.payload || state || ''
  }
});

const {actions: countryCodeActions, reducer: countryCodeReducer} = CountryCodeSlice;
export const {setCode} = countryCodeActions;
export default countryCodeReducer;