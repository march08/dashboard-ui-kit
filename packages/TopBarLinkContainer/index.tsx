import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const TopBarLinkContainer = createSimpleComponent({
  displayName: "TopBarLinkContainer",
  className: cls["top-bar-link-container"],
  Component: "nav"
});

export default TopBarLinkContainer;
