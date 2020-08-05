import { google, youtube_v3 } from 'googleapis';

class Youtube {
  // Singleton
  private static _instance: Youtube;
  private readonly apiKey: string | undefined;
  private youtubeApi: youtube_v3.Youtube;

  private constructor() {
    this.apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    this.youtubeApi = google.youtube('v3');
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async getMostPopularVideos(count: number = 10, pageToken?: string, videoCategoryId?: string) {
    try {
      const options = {
        key: this.apiKey,
        maxResults: count,
        pageToken,
        chart: 'mostPopular',
        part: ['snippet', 'statistics'],
        videoCategoryId
      };
      const res = await this.youtubeApi.videos.list(options);
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async search(query: string) {
    try {
      const options = {
        key: this.apiKey,
        q: query,
        part: ['snippet']
      }
      const res = await this.youtubeApi.search.list(options);
      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default Youtube.Instance;