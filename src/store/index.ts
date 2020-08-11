import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import logger from 'redux-logger';
import countryCodeReducer from './features/country-code-slice';
import searchResultReducer from './features/search-result-slice';
import popularResultReducer from './features/popular-result-slice';
import channelResultReducer from './features/channel-result-slice';

export const history = createBrowserHistory();

// Store
const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  countryCode: countryCodeReducer,
  searchResult: searchResultReducer,
  popularResult: popularResultReducer,
  channelResult: channelResultReducer
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

// Thunk
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
