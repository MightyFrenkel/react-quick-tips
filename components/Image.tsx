import { default as NextImage } from "next/image";
import { Block } from "../models/ContentBlocks";

export interface ImageProps {
  image: Block.Image;
}

function getImageDimensions(src: string) {
  return {
    width: src.split("/")[5].split("x")[0],
    height: src.split("/")[5].split("x")[1],
  };
}
export const Image = ({ image }: ImageProps) => {
  const { width, height } = getImageDimensions(image.filename);
  return (
    <NextImage
      src={image.filename}
      alt={image.alt}
      width={width}
      height={height}
    />
  );
};
