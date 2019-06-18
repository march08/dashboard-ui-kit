import { createSimpleComponent } from "@duik/it";

import cls from "./docspage.module.scss";

export const DocsContentPage = createSimpleComponent({
  displayName: "DocsContentPage",
  Component: "div",
  className: cls.content
});

export const DocsSection = createSimpleComponent({
  displayName: "DocsSection",
  Component: "div",
  className: cls.section
});
