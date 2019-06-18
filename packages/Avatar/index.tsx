import * as React from "react";
import classnames from "classnames";

import { AvatarImageSingle, AvatarImageMulti } from "./AvatarImage";

import cls from "./styles.scss";

export * from "./AvatarImage";

export type AvatarPlaceholderProps = {
  content?: React.ReactNode;
  color?: "green" | "blue" | "orange" | "indigo" | "red" | "yellow";
};

export type AvatarProps = JSX.IntrinsicElements["span"] & {
  name?: React.ReactNode;
  imgUrl?: string | string[];
  avatarPlaceholder?: AvatarPlaceholderProps;
  textTop?: React.ReactNode;
  textBottom?: React.ReactNode;
  rightEl?: React.ReactNode;
  leftEl?: React.ReactNode;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  jumbo?: boolean;
};

export const Avatar = ({
  name,
  imgUrl,
  avatarPlaceholder,
  textTop,
  className,
  rightEl,
  leftEl,
  textBottom,
  sm,
  lg,
  xl,
  xxl,
  jumbo,
  ...rest
}: AvatarProps) => (
  <span
    className={classnames(cls["avatar"], className, {
      [cls["avatar-sm"]]: sm,
      [cls["avatar-lg"]]: lg,
      [cls["avatar-xl"]]: xl,
      [cls["avatar-xxl"]]: xxl,
      [cls["avatar-jumbo"]]: jumbo
    })}
    {...rest}
  >
    <span className={classnames(cls["avatar-image-wrapper"])}>
      {imgUrl ? (
        Array.isArray(imgUrl) ? (
          <AvatarImageMulti imgUrl={imgUrl} />
        ) : (
          <AvatarImageSingle imgUrl={imgUrl} />
        )
      ) : (
        <span
          className={classnames(
            cls["avatar-placeholder"],
            avatarPlaceholder && {
              [`bg-${avatarPlaceholder.color}`]: avatarPlaceholder.color
            }
          )}
        >
          {avatarPlaceholder && avatarPlaceholder.content}
        </span>
      )}
      {rightEl && <span className={cls["avatar-right-el"]}>{rightEl}</span>}
      {leftEl && <span className={cls["avatar-left-el"]}>{leftEl}</span>}
    </span>
    {(name || textTop || textBottom) && (
      <span className={cls["avatar-content"]}>
        {textTop && <span className={cls["avatar-text-top"]}>{textTop}</span>}
        {name && <span className={cls["avatar-name"]}>{name}</span>}
        {textBottom && (
          <span className={cls["avatar-text-bottom"]}>{textBottom}</span>
        )}
      </span>
    )}
  </span>
);

Avatar.displayName = "Avatar";

export default Avatar;
