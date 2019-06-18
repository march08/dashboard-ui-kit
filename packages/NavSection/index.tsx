import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const NavSection = createSimpleComponent({
  displayName: "NavSection",
  className: cls["nav-section"],
  Component: "div"
});

export default NavSection;
