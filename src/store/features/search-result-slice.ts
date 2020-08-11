import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {youtube} from "../api/youtube";

interface SearchParams {
  query: string;
  count?: number;
}

export const fetchSearchResult = createAsyncThunk(
  'searchResult/fetch',
  async (params: any, queryAPI) => {
    const { query, count } = params;
    try {
      return await youtube.search(query, count);
    } catch (err) {
      console.error(err);
    }
  }
);

const SearchResultSlice = createSlice({
  name: 'searchResult',
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
    builder.addCase(fetchSearchResult.pending, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = requestId;
      }
    });

    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.videos = action.payload.items;
        state.currentRequestId = '';
      }
    });
    builder.addCase(fetchSearchResult.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        // state.error = action.error;
      }
    });
  }
});

const {actions: searchResultActions, reducer: searchResultReducer} = SearchResultSlice;
export const {setChannelThumbnails} = searchResultActions;
export default searchResultReducer;