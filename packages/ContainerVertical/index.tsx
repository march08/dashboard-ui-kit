import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const ContainerVertical = createSimpleComponent({
  displayName: "ContainerVertical",
  className: cls["container-vertical"],
  Component: "div"
});

export default ContainerVertical;
