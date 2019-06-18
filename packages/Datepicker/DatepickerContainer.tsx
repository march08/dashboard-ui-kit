import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const DatepickerContainer = createSimpleComponent({
  displayName: "DatepickerContainer",
  className: cls["datepicker-container"],
  Component: "div"
});

export default DatepickerContainer;
