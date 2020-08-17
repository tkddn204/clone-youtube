import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import reducers from './reducers';
import logger from 'redux-logger';

export const history = createBrowserHistory();

// Store
const rootReducer = (history: any) => combineReducers({
  ...reducers,
  router: connectRouter(history)
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
