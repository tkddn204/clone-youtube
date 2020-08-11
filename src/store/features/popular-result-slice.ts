import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {youtube} from "../api/youtube";

export const fetchPopularResult = createAsyncThunk(
  'popularResult/fetch',
  async (params: void, queryAPI) => {
    // const { count } = params;
    try {
      return await youtube.getMostPopularVideos();
    } catch (err) {
      console.error(err);
    }
  }
);

const PopularResultSlice = createSlice({
  name: 'popularResult',
  initialState: {
    videos: [],
    loading: 'idle',
    currentRequestId: '',
    error: undefined
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
    builder.addCase(fetchPopularResult.pending, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = requestId;
      }
    });

    builder.addCase(fetchPopularResult.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.videos = action.payload.items;
        state.currentRequestId = '';
      }
    });
    builder.addCase(fetchPopularResult.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        // state.error = action.error;
      }
    });
  }
});

const {actions: popularResultActions, reducer: popularResultReducer} = PopularResultSlice;
export const {setChannelThumbnails} = popularResultActions;
export default popularResultReducer;