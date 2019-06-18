import classnames from "classnames";
import * as React from "react";

import cls from "./styles.scss";

export type AvatarImageProps = AvatarImageSingleProps | AvatarImageMultiProps;

export type AvatarImageSingleProps = JSX.IntrinsicElements["img"] & {
  name?: React.ReactNode;
  imgUrl: string;
};

export type AvatarImageMultiProps = JSX.IntrinsicElements["div"] & {
  name?: React.ReactNode;
  imgUrl: string[];
  imgProps?: JSX.IntrinsicElements["img"];
};

export const AvatarImageMulti = (props: AvatarImageMultiProps) => {
  const { imgUrl, imgProps, name, ...rest } = props;
  return (
    /* GROUPS, rendering multiple images */
    <div
      className={classnames(cls["avatar-image-multi-container"], {
        [cls.s2]: imgUrl.length === 2,
        [cls.s3]: imgUrl.length === 3,
        [cls.s4]: imgUrl.length >= 4
      })}
      {...rest}
    >
      {imgUrl.slice(0, 4).map(url => (
        <img
          key={url}
          alt={typeof name === "string" ? name : ""}
          className={cls["avatar-image"]}
          src={url}
          {...imgProps}
        />
      ))}
    </div>
  );
};

AvatarImageMulti.displayName = "AvatarImageMulti";

export const AvatarImageSingle = (props: AvatarImageSingleProps) => {
  const { imgUrl, name } = props;
  return (
    <img
      alt={typeof name === "string" ? name : ""}
      className={cls["avatar-image"]}
      src={imgUrl}
    />
  );
};

AvatarImageSingle.defaultProps = {
  name: null
};

AvatarImageSingle.displayName = "AvatarImageSingle";
