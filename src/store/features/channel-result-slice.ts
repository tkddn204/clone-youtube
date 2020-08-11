import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setChannelThumbnails} from "./popular-result-slice";
import {youtube} from "../api/youtube";
import {store} from "../index";

export const fetchChannelResult = createAsyncThunk(
  'channelResult/fetch',
  async (params: any, queryAPI) => {
    const { id } = params;
    try {
      return await youtube.getChannelListById(id);
    } catch (err) {
      console.error(err);
    }
  }
);

const ChannelResultSlice = createSlice({
  name: 'channelResult',
  initialState: {
    channel: {},
    loading: 'idle',
    currentRequestId: '',
    error: undefined
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchChannelResult.pending, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = requestId;
      }
    });

    builder.addCase(fetchChannelResult.fulfilled, (state, action) => {
      const { requestId, arg } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.currentRequestId = '';
        state.channel = action.payload.items[0];
      }
    });
    builder.addCase(fetchChannelResult.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        // state.error = action.error;
      }
    });
  }
});

const {reducer: channelResultReducer} = ChannelResultSlice;
export default channelResultReducer;