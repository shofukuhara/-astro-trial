export const _updateViewportSize = () => {
  const viewportWidth = window.innerWidth + 'px';
  const viewportHeight = window.innerHeight + 'px';

  document.documentElement.style.setProperty('--vw', viewportWidth);
  document.documentElement.style.setProperty('--vh', viewportHeight);
};

// 初期設定を自動的に実行
_updateViewportSize();
window.addEventListener('resize', _updateViewportSize);
