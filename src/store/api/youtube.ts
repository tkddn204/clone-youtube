export declare namespace Youtube {
  export namespace Params {
    export interface Channel extends Record<string, string> {
      part: string;
      key: string; // API key
      id: string; // Channel id
    }

    export interface Video extends Record<string, string> {
      part: string;
      key: string; // API key
      maxResults: string, // item counts
      chart: string
    }

    export interface Search extends Record<string, string> {
      part: string;
      key: string; // API key
      maxResults: string, // item counts
      q: string; // query
    }
  }

  export namespace Response {
    export interface Video {
      kind: string;
      etag: string;
      items: VideoItem[];
      pageInfo: PageInfo;
      nextPageToken?: string;
    }

    export interface Channel {
      kind: string;
      etag: string;
      items: ChannelItem[];
      pageInfo: PageInfo;
      nextPageToken?: string;
    }

    /**
     * common interfaces
     */

    export interface PageInfo {
      totalResults: number;
      resultsPerPage: number;
    }

    export interface Thumbnail {
      url: string;
      width: number;
      height: number;
    }

    export interface Thumbnails {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard?: Thumbnail;
      maxres?: Thumbnail;
    }

    export interface Localized {
      title: string;
      description: string;
    }

    /**
     * Video Responses
     */

    export interface VideoSnippet {
      publishedAt: Date;
      channelId: string;
      title: string;
      description: string;
      thumbnails: Thumbnails;
      channelTitle: string;
      tags: string[];
      categoryId: string;
      liveBroadcastContent: string;
      defaultLanguage: string;
      localized: Localized;
      defaultAudioLanguage: string;
    }

    export interface Statistics {
      viewCount: string;
      likeCount: string;
      dislikeCount: string;
      favoriteCount: string;
      commentCount: string;
    }

    export interface VideoItem {
      kind: string;
      etag: string;
      id: string;
      snippet: VideoSnippet;
      statistics: Statistics;
    }

    /**
     * Channel Responses
     */

    export interface ChannelSnippet {
      title: string;
      description: string;
      customUrl: string;
      publishedAt: Date;
      thumbnails: Thumbnails;
      localized: Localized;
      country: string;
    }

    export interface ChannelItem {
      kind: string;
      etag: string;
      id: string;
      snippet: ChannelSnippet;
    }
  }

  interface Errors {
    message: string;
    domain: string;
    reason: string;
    location: string;
    locationType: string;
  }

  export interface Error {
    code: number;
    message: string;
    errors: Errors[];
  }
}

export interface getChannelListByIdParams {
  id: string;
}

export interface MostPopularVideosParams {
  count?: string;
  pageToken?: string;
  videoCategoryId?: string;
}

export interface SearchParams {
  query: string;
  count?: string;
}

class YoutubeMethods {
  private readonly API_KEY: string = process.env.REACT_APP_YOUTUBE_API_KEY || '';
  private readonly BASE_URL: string = "https://www.googleapis.com/youtube/v3";
  private readonly SEARCH_URL: string = `${this.BASE_URL}/search`;
  private readonly VIDEOS_URL: string = `${this.BASE_URL}/videos`;
  private readonly CHANNEL_URL: string = `${this.BASE_URL}/channels`;

  async getChannelListById(id: string): Promise<Youtube.Response.Channel> {
    const params: Youtube.Params.Channel = {
      key: this.API_KEY,
      id,
      part: 'snippet'
    };

    try {
      const res = await fetch(`${this.CHANNEL_URL}?${new URLSearchParams(params)}`);
      return await res.json();
    } catch (err) {
      return err;
    }
  }

  async getMostPopularVideos(
    count?: string,
    pageToken?: string,
    videoCategoryId?: string
  ): Promise<Youtube.Response.Video> {
    const params: Youtube.Params.Video = {
      key: this.API_KEY,
      maxResults: "10",
      chart: 'mostPopular',
      part: 'snippet,statistics'
    };
    if (count) params.maxResults = count;
    if (pageToken) params.pageToken = pageToken;
    if (videoCategoryId) params.videoCategoryId = videoCategoryId;

    try {
      const res = await fetch(`${this.VIDEOS_URL}?${new URLSearchParams(params)}`);
      return await res.json();
    } catch (err) {
      return err;
    }
  }

  async search(
    query: string,
    count?: string,
    pageToken?: string
  ): Promise<Youtube.Response.Video> {
    const params: Youtube.Params.Search = {
      key: this.API_KEY,
      maxResults: "10",
      q: query,
      part: 'snippet'
    };
    if (count) params.maxResults = count;
    if (pageToken) params.pageToken = pageToken;


    try {
      const res = await fetch(`${this.SEARCH_URL}?${new URLSearchParams(params)}`);
      return await res.json();
    } catch (err) {
      return err;
    }
  }
}

export const youtube = new YoutubeMethods();