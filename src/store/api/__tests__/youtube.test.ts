import Youtube from '../youtube';

describe('Youtube API', () => {
  test('get most popular videos', async () => {
    try {
      const res = await Youtube.getMostPopularVideos();
      // console.log(res);
      expect(res).toHaveReturned();
    } catch (err) {
      expect(err);
    }
  });

  test('get search list : "test"', async () => {
    try {
      const res = await Youtube.search("test");
      expect(res).toHaveReturned();
    } catch (err) {
      expect(err);
    }
  });
});