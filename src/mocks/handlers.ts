import { rest } from 'msw';

const getPopularVideos = rest.get('/popularVideos', (req, res, ctx) => {
  const videos = {};

  ctx.delay(500);
  return res(
    ctx.status(200),
    ctx.json(videos)
  );
});

export const handlers = [
  getPopularVideos,
];