import {createAsyncThunk, createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {generateParams} from "../../utils";
import {VideoListResponse} from "../../types/video";

interface ResponseError extends Error {
}

interface VideoListParams extends Record<string, string> {
  count: string;
}

interface ThunkApiConfig {
  rejectValue: ResponseError
}

export const fetchPopularVideoListThunk = createAsyncThunk<VideoListResponse,
  VideoListParams,
  ThunkApiConfig>(
  'popularVideoList/fetch',
  async (videoListParams: VideoListParams, {rejectWithValue}): Promise<any> => {
    try {
      const params = generateParams(videoListParams);
      const base = '/popularVideoList';
      const url = params ? `${base}?${params}` : base;
      const res = await fetch(url);
      return (await res.json()) as VideoListResponse;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

interface PopularVideoListState extends VideoListResponse {
  loading: 'idle' | 'pending',
  error: ResponseError
}

const fetchPopularVideoListSlice = createSlice<PopularVideoListState, SliceCaseReducers<PopularVideoListState>>({
  name: "popularVideoList",
  initialState: {} as PopularVideoListState,
  reducers: {
    [fetchPopularVideoListThunk.pending.type]: (state: PopularVideoListState) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchPopularVideoListThunk.fulfilled.type]: (state: PopularVideoListState, action: PayloadAction<PopularVideoListState>) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state = Object.assign({}, state, action.payload);
      }
    },
    [fetchPopularVideoListThunk.rejected.type]: (state: PopularVideoListState, action: PayloadAction<PopularVideoListState>) => {
      if (action.payload) {
        state.loading = 'idle';
        state.error = action.payload.error;
      }
    }
  }
});

const {actions: fetchPopularVideoListActions, reducer: fetchPopularVideoListReducer} = fetchPopularVideoListSlice;
// export const {setVideoList} = fetchPopularVideoListActions;
export default fetchPopularVideoListReducer;