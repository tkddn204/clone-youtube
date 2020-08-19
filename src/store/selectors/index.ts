import {createSelector} from "@reduxjs/toolkit";
import {Youtube} from "../api/youtube";

const getVideoResult = (state: any) => state.videoResult;
const getSearchResult = (state: any) => state.searchResult;
const getPopularResult = (state: any) => state.popularResult;
const getChannelResult = (state: any) => state.channelResult;
const getDrawerState = (state: any) => state.drawerState;

export interface NormalizedYoutubeVideoInfo {
  id: string,
  thumbnailSrc?: string,
  title: string,
  channelName: string,
  channelThumbnailSrc?: string,
  viewCount?: string,
  publishedAt: Date,
  isStreaming: boolean
}

const normalize = (result: Youtube.Response.VideoItem): NormalizedYoutubeVideoInfo => ({
  id: result.id,
  thumbnailSrc: result.snippet.thumbnails.medium ? result.snippet.thumbnails.medium.url : result.snippet.thumbnails.default.url,
  title: result.snippet.title,
  channelName: result.snippet.channelTitle,
  channelThumbnailSrc: result.snippet.channelThumbnails?.default.url,
  viewCount: result.statistics?.viewCount,
  publishedAt: new Date(result.snippet.publishedAt),
  isStreaming: false
});

const resultNormalize = (result: any) => result.videos.map(normalize);

export const VideoSelector = createSelector(
  [getVideoResult],
  resultNormalize
)

export const SearchSelector = createSelector(
  [getSearchResult],
  resultNormalize
);

export const PopularSelector = createSelector(
  [getPopularResult],
  resultNormalize
);

export const ChannelSelector = createSelector(
  [getChannelResult],
  channelResult => channelResult.channel
);

export const VideoListSelector = createSelector(
  [SearchSelector, PopularSelector],
  (search, popular) => ({
    search, popular
  })
);

export const DrawerSelector = createSelector(
  [getDrawerState],
  drawerState => drawerState
);