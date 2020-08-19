export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Channel {
  id: string;
  title: string;
  thumbnail: Thumbnail;
  description: string;
  publishedAt: Date;
  customUrl: string;
  country: string;
}

interface Statistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: Date;
  thumbnail: Thumbnail;
  channel: Channel;
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  defaultAudioLanguage: string;
  statistic: Statistic;
}

export interface VideoListResponse {
  videoList: Video[];
  page: 0;
  pageInfo: PageInfo;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
