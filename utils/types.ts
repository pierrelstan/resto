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

export type { ListProps, ToggleProps, IImageProps };
