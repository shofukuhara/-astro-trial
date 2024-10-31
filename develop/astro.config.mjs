import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  // 開発サーバー立ち上げ設定
  server: {
    host: true,
    open: true,
  },
});
