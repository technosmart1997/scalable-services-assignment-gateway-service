import { createProxyMiddleware } from "http-proxy-middleware";

export const setupProxies = (app, routes) => {
  routes.forEach((r) => {
    app.use(`/api/v1${r.url}`, createProxyMiddleware(r.proxy));
  });
};
