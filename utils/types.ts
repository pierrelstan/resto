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
interface ITitlesProps {
  fontSize: string;
  color: string;
  title: string;
}
interface AObj {
  fontSize: string;
  color: string;
  title: string;
  description: string;
}

type AProps = {
  data: Array<AObj>;
};

type OurMenuObj = {
  image: string | StaticImageData;
  title: string;
  price: string;
};
type MenuProps = {
  data: Array<OurMenuObj>;
};
type ImageProps = string | StaticImageData;
type CustomImageProps = {
  data: Array<ImageProps>;
};

interface TimeLineObjProps {
  title: string;
  subTitle: string;
  description: string;
  image: string | StaticImageData;
}
type TimeLineProps = {
  data: Array<TimeLineObjProps>;
};
export type {
  ListProps,
  ToggleProps,
  IImageProps,
  IFooterProps,
  ITitleProps,
  IFeaturesProps,
  ITitlesProps,
  AProps,
  MenuProps,
  CustomImageProps,
  TimeLineProps,
  OurMenuObj,
  ImageProps,
};
