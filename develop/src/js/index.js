import { _updateViewportSize } from './modules/_viewport';
import { _splide } from './modules/_splide';

window.addEventListener('DOMContentLoaded', () => {
  // 共通処理
  _splide();
  _updateViewportSize();
});
