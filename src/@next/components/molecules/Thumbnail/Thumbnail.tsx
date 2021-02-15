import React from "react";

import { maybe } from "@utils/misc";

import { PlaceholderImage } from "@components/atoms";
import { getAvatarImage, getAvatarImage2x } from "@temp/views/Product/utils";
import { CachedImage } from "..";
import { IProps } from "./types";

export const Thumbnail: React.FC<IProps> = ({
  source,
  children,
  ...props
}: IProps) => {
  const { thumbnail } = source;

  const thumb_url = getAvatarImage(source);
  const thumb_url2x = getAvatarImage2x(source);

  if (!thumb_url && !thumb_url2x) {
    return <PlaceholderImage />;
  }

  return (
    <CachedImage
      {...props}
      url={maybe(() => thumb_url)}
      url2x={maybe(() => thumb_url2x)}
      alt={maybe(() => (thumbnail!.alt ? thumbnail!.alt : ""), "")}
    >
      {children}
    </CachedImage>
  );
};
