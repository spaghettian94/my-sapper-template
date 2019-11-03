import posts from './_posts';

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug
    };
  })
);

/**
 * @param {Request} req request
 * @param {Response} res response
 */
export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
