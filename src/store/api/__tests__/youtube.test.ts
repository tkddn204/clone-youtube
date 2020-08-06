import {youtube} from '../youtube';

describe('Youtube API', () => {
  test('get most popular videos', async () => {
    try {
      const res = await youtube.getMostPopularVideos();
      // expect(res).toHaveReturned();
    } catch (err) {
      expect(err).toEqual(1);
    }
  });

  test('get search list : "test"',  async () => {
    try {
      const res = await youtube.search("test");
      // expect(res).toThrow(new Error());
    } catch (err) {
      expect(err).toEqual(1);
    }
  });
});