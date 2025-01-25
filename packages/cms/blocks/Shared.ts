import { fragmentOn } from 'basehub';

export const imageFragment = fragmentOn('BlockImage', {
  url: true,
  width: true,
  height: true,
  alt: true,
  blurDataURL: true,
});
