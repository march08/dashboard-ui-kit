import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const NavTitle = createSimpleComponent({
  displayName: "NavTitle",
  className: cls["nav-title"],
  Component: "span"
});

export default NavTitle;
