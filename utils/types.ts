import { StaticImageData } from 'next/image';
interface ListProps {
  list: string;
}
interface ToggleProps {
  toggle: Boolean;
}
interface IImageProps {
  image: StaticImageData;
}
interface IFooterProps {
  date: number;
}

interface ITitleProps {
  fontSize: string;
  color: string;
}
interface IFeaturesProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  title: string;
}

export type {
  ListProps,
  ToggleProps,
  IImageProps,
  IFooterProps,
  ITitleProps,
  IFeaturesProps,
};
