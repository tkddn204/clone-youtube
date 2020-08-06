declare namespace Youtube {

  export namespace Search {
    export interface Params {
      // Required
      part: 'snippet' | string;

      /**
       * The channelId parameter indicates that the API response should only contain resources created by the channel.
       */
      channelId?: string;

      /**
       * The channelType parameter lets you restrict a search to a particular type of channel.
       *
       * any – Return all channels.
       * show – Only retrieve shows.
       */
      channelType?: 'any' | 'show';
      fields?: string;
      eventType?: string;
      forContentOwner?: boolean;
      forDeveloper?: boolean;
      forMine?: boolean;
      location?: string;
      locationRadius?: string;
      maxResults?: number;
      onBehalfOfContentOwner?: string;
      order?: string;
      pageToken?: string;
      publishedAfter?: string;
      publishedBefore?: string;
      regionCode?: string;
      relatedToVideoId?: string;
      relevanceLanguage?: string;
      safeSearch?: string;
      topicId?: string;
      type?: string;
      videoCaption?: string;
      videoCategoryId?: string;
      videoDefinition?: string;
      videoDimension?: string;
      videoDuration?: string;
      videoEmbeddable?: string;
      videoLicense?: string;
      videoSyndicated?: string;
      videoType?: string;
      key?: string;
    }

    export interface Response {
      regionCode: string;
      nextPageToken: string;
      prevPageToken?: string;
      pageInfo: { totalResults: number, resultsPerPage: number };
      items: Video.SearchResponse[];
    }
  }

  export namespace Video {
    export interface SearchResponse {
      id: { kind: string, videoId: string };
      snippet: {
        publishedAt: string,
        publishTime: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
          default: Thumbnail.Info,
          medium: Thumbnail.Info,
          high: Thumbnail.Info
        },
        channelTitle: string,
        liveBroadcastContent: string
      }
    }
  }

  export namespace Thumbnail {
    export interface Info {
      url: string;
      width: number;
      height: number;
    }

    export interface Response {
      default?: YouTubeThumbnail;
      medium?: YouTubeThumbnail;
      high?: YouTubeThumbnail;
      standard?: YouTubeThumbnail;
      maxres?: YouTubeThumbnail;
    }
  }

  export namespace Error {
    export enum Code {
      badRequest = 400,
      forbidden = 403,
      quotaExceeded = 403,
      notFound = 404
    }
  }
}
