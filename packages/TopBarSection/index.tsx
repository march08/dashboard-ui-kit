import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const TopBarSection = createSimpleComponent({
  displayName: "TopBarSection",
  className: cls["top-bar-section"],
  Component: "div"
});

export default TopBarSection;
