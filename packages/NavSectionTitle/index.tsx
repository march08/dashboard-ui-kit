import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const NavSectionTitle = createSimpleComponent({
  displayName: "NavSectionTitle",
  className: cls["nav-section-title"],
  Component: "span"
});

export default NavSectionTitle;
