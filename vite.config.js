import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      proxy: {
        '/ojin': {
          target: 'wss://models.ojin.ai',
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/ojin/, ''),
          configure: (proxy) => {
            proxy.on('proxyReqWs', (proxyReq) => {
              if (env.VITE_ODJIN_API_KEY) {
                proxyReq.setHeader('Authorization', env.VITE_ODJIN_API_KEY);
              }
            });
          }
        },
        '/tts': {
          target: 'https://translate.google.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/tts/, '')
        }
      }
    }
  };
});
