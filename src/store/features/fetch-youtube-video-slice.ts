import {AsyncThunk, createAsyncThunk, createSlice, SerializedError} from '@reduxjs/toolkit';
import {getVideoListByIdParams, MostPopularVideosParams, SearchParams, Youtube, youtube} from "../api/youtube";

interface ThunkApiConfig {
  rejectValue: Youtube.Error
}

export const fetchVideoResultThunk = createAsyncThunk<Youtube.Response.Video,
  getVideoListByIdParams,
  ThunkApiConfig>(
  'videoResult/fetch',
  async (params: getVideoListByIdParams, {rejectWithValue}) => {
    const {id} = params;
    try {
      return await youtube.getVideoListById(id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchPopularResultThunk = createAsyncThunk<Youtube.Response.Video,
  MostPopularVideosParams,
  ThunkApiConfig>(
  'popularResult/fetch',
  async (params: MostPopularVideosParams, {rejectWithValue}) => {
    const {count, pageToken, videoCategoryId} = params;
    try {
      return await youtube.getMostPopularVideos(count, pageToken, videoCategoryId);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSearchResultThunk = createAsyncThunk<Youtube.Response.Video,
  SearchParams,
  ThunkApiConfig>(
  'searchResult/fetch',
  async (params: SearchParams, {rejectWithValue}) => {
    const {query, count} = params;
    try {
      return await youtube.search(query, count);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const fetchBaseResultSlice = <T extends AsyncThunk<Youtube.Response.Video, any, ThunkApiConfig>>(
  name: string,
  thunk: T) =>
  createSlice({
    name,
    initialState: {
      videos: [] as Youtube.Response.VideoItem[],
      loading: 'idle',
      currentRequestId: '',
      error: {} as SerializedError
    },
    reducers: {
      setChannelThumbnails: (state, action) => {
        if (!!state.videos) {
          const video: any = state.videos.find((video: any) => {
            return video.etag === action.payload.videoEtag;
          });
          if (video) {
            video.snippet.channelThumbnails = action.payload.thumbnails;
          }
        }
      }
    },
    extraReducers: builder => {
      builder.addCase(thunk.pending, (state, action) => {
        const {requestId} = action.meta;
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = requestId;
        }
      });

      builder.addCase(thunk.fulfilled, (state, action) => {
        const {requestId} = action.meta;
        if (state.loading === 'pending' && state.currentRequestId === requestId) {
          state.loading = 'idle';
          state.videos = action.payload.items;
          state.currentRequestId = '';
        }
      });
      builder.addCase(thunk.rejected, (state, action) => {
        if (action.payload) {
          state.loading = 'idle';
          state.error = action.error;
        }
      });
    }
  });

const VideoResultSlice = fetchBaseResultSlice("videoResult", fetchVideoResultThunk);
const {reducer: videoResultReducer} = VideoResultSlice;

const PopularResultSlice = fetchBaseResultSlice("popularResult", fetchPopularResultThunk);
const {actions: popularResultActions, reducer: popularResultReducer} = PopularResultSlice;

const SearchResultSlice = fetchBaseResultSlice("searchResult", fetchSearchResultThunk);
const {actions: searchResultActions, reducer: searchResultReducer} = SearchResultSlice;

export const actions = {
  setPopularChannelThumbnails: popularResultActions.setChannelThumbnails,
  setSearchChannelThumbnails: searchResultActions.setChannelThumbnails,
}

export default {
  videoResultReducer,
  popularResultReducer,
  searchResultReducer
};