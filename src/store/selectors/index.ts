import {createSelector} from "@reduxjs/toolkit";

const getSearchResult = (state:any) => state.searchResult;
const getPopularResult = (state:any) => state.popularResult;
const getChannelResult = (state:any) => state.channelResult;

const resultNormalize = (result: any) => (result.videos.map((result: any) => ({
  thumbnailSrc: result.snippet.thumbnails.medium.url,
  title: result.snippet.title,
  channelName: result.snippet.channelTitle,
  channelThumbnailSrc: result.snippet.channelThumbnails?.default.url,
  viewCount: result.statistics?.viewCount,
  publishedAt: result.snippet.publishedAt,
  isStreaming: false
})));

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

export const VideoSelector = createSelector(
  SearchSelector, PopularSelector,
  (search, popular) => ({
      search, popular
  })
);
