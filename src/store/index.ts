import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import logger from 'redux-logger';
import countryCodeReducer from './features/country-code-slice';
import fetchVideoReducer from './features/fetch-video-slice';
import channelResultReducer from './features/channel-result-slice';
import drawerReducer from "./features/drawer-slice";

export const history = createBrowserHistory();

// Store
const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  countryCode: countryCodeReducer,
  searchResult: fetchVideoReducer.searchResultReducer,
  popularResult: fetchVideoReducer.popularResultReducer,
  channelResult: channelResultReducer,
  drawerState: drawerReducer
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

export type AppDispatch = typeof store.dispatch;

// Thunk
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
