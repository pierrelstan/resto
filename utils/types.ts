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

export type { ListProps, ToggleProps, IImageProps, IFooterProps };
