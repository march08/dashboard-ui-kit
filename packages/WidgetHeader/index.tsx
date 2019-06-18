import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const WidgetHeader = createSimpleComponent({
  displayName: "WidgetHeader",
  className: cls["card-header"],
  Component: "div"
});

export default WidgetHeader;
