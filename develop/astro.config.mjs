import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  server: {
    // 他の端末からローカルサーバを確認させせたいので、hostをtrueにする
    host: true,
    // 開発サーバーが立ち上がったらブラウザを自動で開かせる
    open: true,
  },
  integrations: [
    // compressの設定はお好みで！
    compress({
      html: true,
      svg: true,
      png: true,
      jpeg: true,
      jpg: true,
    }),
    relativeLinks(),
  ],
  // 多分パワープレイ？してます！
  build: {
    assets: 'assets/js',
  },
  vite: {
    build: {
      // minifyを有効にする場合はtrueにする
      minify: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split('.').pop(); // 拡張子を取得
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `assets/images/[extname]`; // 画像ファイルは元の名前とハッシュ付き
            }
            if (/css|scss/i.test(extType)) {
              // CSSファイルのbuild後の設定
              return `assets/css/index.[hash][extname]`;
            }
            // その他のアセットのbuild後の設定
            return `assets/[extname]`;
          },
          // jsファイルもハッシュ付き
          entryFileNames: 'assets/js/index.[hash].js',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
