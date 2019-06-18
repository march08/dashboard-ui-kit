import createSimpleComponent from "@duik/create-simple-component";
import cls from "./styles.scss";

export const ContentTitle = createSimpleComponent({
  displayName: "ContentTitle",
  className: cls["content-title"],
  Component: "span"
});

export default ContentTitle;
