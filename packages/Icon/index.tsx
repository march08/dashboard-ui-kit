import * as React from "react";
import classnames from "classnames";
import cls from "./styles.scss";

export enum DUIKON {
  close = "close",
  arrow_left = "arrow_left",
  arrow_right = "arrow_right",
  plus_rounded = "plus_rounded",
  pin_rounded_circle = "pin_rounded_circle",
  message_2 = "message_2",
  calendar_2 = "calendar_2",
  building_plan = "building_plan",
  tap_click_force_touch = "tap_click_force_touch",
  ruler = "ruler",
  video_camera = "video_camera",
  phone_two = "phone_two",
  smile = "smile",
  attachment = "attachment",
  picture = "picture",
  view_simple = "view_simple",
  lightbulb = "lightbulb",
  wallet = "wallet",
  view_grid = "view_grid",
  view_list = "view_list",
  profile_card = "profile_card",
  front_store = "front_store",
  rocket = "rocket",
  buildings = "buildings",
  building = "building",
  shopping_bag = "shopping_bag",
  check = "check",
  more = "more",
  trending_down = "trending_down",
  trending_up = "trending_up",
  star = "star",
  add = "add",
  help = "help",
  message = "message",
  send_round = "send_round",
  inbox_paper_round = "inbox_paper_round",
  search_left = "search_left",
  settings = "settings",
  love = "love",
  edit = "edit",
  multitasking = "multitasking",
  gallery_grid_view = "gallery_grid_view",
  home = "home",
  profile_round = "profile_round",
  profile_plus_round = "profile_plus_round",
  clock = "clock",
  container = "container",
  globe_network = "globe_network",
  calendar = "calendar",
  stats = "stats",
  money_round = "money_round",
  cloud_up = "cloud_up",
  image_picture = "image_picture",
  camera = "camera",
  desktop = "desktop",
  phone = "phone",
  dropdown_arrow = "dropdown_arrow"
}

export type IconProps = JSX.IntrinsicElements["i"] & {
  mr?: boolean;
  ml?: boolean;
  children: DUIKON | string;
};

export const Icon = (props: IconProps) => {
  const { mr, ml, className, ...rest } = props;

  return (
    <i
      className={classnames("uikon", className, {
        [cls.mr]: mr,
        [cls.ml]: ml
      })}
      {...rest}
    />
  );
};

Icon.displayName = "Icon";

export default Icon;
