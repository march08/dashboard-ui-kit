import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/server';
import { html } from 'js-beautify';
import { jsxToString, useLocalStorage } from 'utils';
import { Code, CodeLang } from 'components';
import cls from './docspage.module.scss';

export type CodeRHProps = {
  content: React.ReactElement;
  contentHtml?: React.ReactElement;
  code?: string;
};

export const CodeRH = (props: CodeRHProps) => {
  const { content, code, contentHtml } = props;

  const [val, setVal] = useLocalStorage('active_code', 'react');

  const htmlCode = html(
    ReactDOM.renderToStaticMarkup(
      <BrowserRouter>{contentHtml || content}</BrowserRouter>
    ),
    {
      indent_size: 2,
      inline: [],
      wrap_line_length: 100,
    }
  );

  const reacted = code || jsxToString(content);

  return (
    <>
      <Code style={{ display: val === 'react' ? 'block' : 'none' }}>
        {reacted}
      </Code>
      <Code
        style={{ display: val !== 'react' ? 'block' : 'none' }}
        language={CodeLang.markup}
      >
        {htmlCode}
      </Code>

      <div className={cls['code-switch']}>
        <span
          onClick={() => setVal('react')}
          role="button"
          className={cls['code-switch-item']}
        >
          React
        </span>
        <span
          onClick={() => setVal('html')}
          role="button"
          className={cls['code-switch-item']}
        >
          HTML Snippet
        </span>
      </div>
    </>
  );
};
