import { defineConfig } from 'vite';

export default defineConfig({
  base: "/memory/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        game: 'game.html',
        gameOver: 'gameOver.html',
        settings: 'settings.html'
      }
    }
  }
});