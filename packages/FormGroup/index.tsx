import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const FormGroup = createSimpleComponent({
  displayName: "FormGroup",
  className: cls["form-group"],
  Component: "div"
});

export default FormGroup;
