import * as React from "react";
import { DocsContentPage, PageContent } from "../../components";

import { H1 } from "components";

export const UseInCreateReactApp = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "example", label: "Examples" },
          { id: "sizes", label: "Sizes" }
        ]}
      />
      <H1>Using @duik with create-react-app</H1>
    </DocsContentPage>
  );
};

export default UseInCreateReactApp;
