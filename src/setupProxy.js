/**
 * __Seed builder__
 *   Dev server middleware (react-scripts loads this file automatically)
 *   Serves /health for the docker healthcheck, ahead of the history fallback
 *   that would otherwise answer 200 on every path.
 */

module.exports = function setupProxy(app) {
  app.get("/health", (req, res) => {
    res.status(200).end();
  });
};
