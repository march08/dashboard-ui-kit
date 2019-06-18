import * as React from "react";
import { Link } from "react-router-dom";
import cls from "./docspage.module.scss";

type PageContentProps = {
  data: {
    id: string;
    label: React.ReactNode;
  }[];
};

export const PageContent = (props: PageContentProps) => {
  const { data } = props;

  return (
    <div className={cls["page-content-list-wrapper"]}>
      <ol className={cls["page-content-list"]}>
        <h4>Table of contents</h4>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`#${item.id}`}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
