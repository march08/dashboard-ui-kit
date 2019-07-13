import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const WidgetTable = createSimpleComponent<"table">({
  displayName: "WidgetTable",
  className: cls["card-table"],
  Component: "table"
});

export default WidgetTable;
