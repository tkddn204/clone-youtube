import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {NormalizedYoutubeVideoInfo} from "../selectors";

export interface VideoInfo extends NormalizedYoutubeVideoInfo {
  tags?: ReadonlyArray<string>;
}

export interface VideoPlayerInfo extends VideoInfo {

}

const VideoPlayerInfoSlice = createSlice<VideoInfo, SliceCaseReducers<VideoInfo>, string>({
  name: 'video',
  initialState: {} as VideoInfo,
  reducers: {
    setVideo: (state, action: PayloadAction<VideoInfo>) => action.payload
  }
});

const {actions: videoPlayerActions, reducer: videoPlayerReducer} = VideoPlayerInfoSlice;
export const {setVideo} = videoPlayerActions;
export default videoPlayerReducer;