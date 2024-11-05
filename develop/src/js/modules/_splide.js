// index.js
import Splide from '@splidejs/splide';
export const _splide = () => {
  new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
  }).mount();
};
