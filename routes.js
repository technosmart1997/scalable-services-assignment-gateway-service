export const ROUTES = [
  {
    url: "/doctor",
    auth: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: "http://host.docker.internal:3001/doctor",
      changeOrigin: false,
    },
  },
  {
    url: "/appointment",
    auth: true,
    proxy: {
      target: "http://host.docker.internal:3002/appointment",
      changeOrigin: false,
      on: {
        proxyReq: (proxyReq, req, res) => {
          /* handle proxyReq */
          if (req.user) {
            proxyReq.setHeader("x-user-data", JSON.stringify(req.user));
          }
        },
      },
    },
  },
  {
    url: "/billing",
    auth: true,
    proxy: {
      target: "http://host.docker.internal:3003/billing",
      changeOrigin: false,
      on: {
        proxyReq: (proxyReq, req, res) => {
          /* handle proxyReq */
          if (req.user) {
            proxyReq.setHeader("x-user-data", JSON.stringify(req.user));
          }
        },
      },
    },
  },
  {
    url: "/mail",
    auth: true,
    proxy: {
      target: "http://host.docker.internal:3004/mail",
      changeOrigin: false,
      on: {
        proxyReq: (proxyReq, req, res) => {
          /* handle proxyReq */
          if (req.user) {
            proxyReq.setHeader("x-user-data", JSON.stringify(req.user));
          }
        },
      },
    },
  },
];
