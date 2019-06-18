import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const TopBarMenuDivider = createSimpleComponent({
  displayName: "TopBarMenuDivider",
  className: cls["top-bar-menu-divider"],
  Component: "div"
});

export default TopBarMenuDivider;
