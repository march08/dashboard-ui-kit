import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const TopBar = createSimpleComponent({
  displayName: "TopBar",
  className: cls["top-bar"],
  Component: "section"
});

export default TopBar;
