import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import {useDispatch} from "react-redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import logger from 'redux-logger';
import countryCodeReducer from './features/country-code-slice';

export const history = createBrowserHistory();

// Store
const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  countryCode: countryCodeReducer
});
export const store = configureStore({
  reducer: rootReducer(history),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(
        routerMiddleware(history)
      ).concat(logger)
});
export const getAppState = store.getState;

// Dispatch
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Thunk
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
