import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const ContainerHorizontal = createSimpleComponent({
  displayName: "ContainerHorizontal",
  className: cls["container-horizontal"],
  Component: "div"
});

export default ContainerHorizontal;
