class Youtube {
  private readonly API_KEY: string = process.env.REACT_APP_YOUTUBE_API_KEY || '';
  private readonly BASE_URL: string = "https://www.googleapis.com/youtube/v3";
  private readonly SEARCH_URL: string = `${this.BASE_URL}/search`;
  private readonly VIDEOS_URL: string = `${this.BASE_URL}/videos`;

  async getMostPopularVideos(count: number = 10, pageToken?: string, videoCategoryId?: string) {
    const params: Record<string, string> = {
      key: this.API_KEY,
      maxResults: count.toString(),
      chart: 'mostPopular',
      part: 'snippet,statistics'
    };
    if (pageToken) params.pageToken = pageToken;
    if (videoCategoryId) params.videoCategoryId = videoCategoryId;

    try {
      const res = await fetch(`${this.VIDEOS_URL}?${new URLSearchParams(params)}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  async search(query: string, count: number = 10) {
    const params: Record<string, string> = {
      key: this.API_KEY,
      maxResults: count.toString(),
      q: query,
      part: 'snippet'
    };

    try {
      const res = await fetch(`${this.SEARCH_URL}?${new URLSearchParams(params)}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  }
}

export const youtube = new Youtube();