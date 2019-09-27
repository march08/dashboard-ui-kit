import * as React from 'react';
import { H1, Code, ExtLink, CodeLang } from 'components';
import { Link } from 'react-router-dom';
import { WidgetTable, Widget } from '@duik/it';
import { colors } from './colors';
import { DocsContentPage, PageContent } from '../../components';
import cls from './theming.module.scss';

export const CustomizingTheme = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'intro', label: 'Basic Introduction' },
          { id: 'integration', label: 'Style integration' },
          { id: 'overriding', label: 'CSS Overriding' },
          { id: 'theming', label: 'Theming' },
          { id: 'custom-theme', label: 'Creating custom theme' },
          { id: 'css-vars', label: 'CSS Vars' },
          { id: 'css-vars-list', label: 'List of variables' }
        ]}
      />
      <H1 id="intro">CSS and Theming</H1>
      <p>
        Dashboard UI kit is developed in a friendly way towards CSS adjustments
        and theming. The core core componnets are styled with SCSS, which gives
        us the best control over the class naming. The components are developed
        with Bootstrap in mind - this doesn't mean that you need bootstrap to
        run the application, but if you are used to bootstrap, you can freerly
        use it (however it's not recommended to use the JS part of the
        Bootstrap). Here is how the DOM output look like.
      </p>
      <Code>
        {`// react
<Button primary>Default</Button>

// DOM
<button class="btn btn-primary" type="button" role="button">
  Default
</button>`}
      </Code>
      <h2 id="integration">Zero dependencies and no hassle integration</h2>
      <p>
        You don't need any stylesheet libraries, initialization is unnecessary
        and overriding styles is dead simple. To install the library, simple
        follow <Link to="/docs/react/installation">this guide</Link>. TLDR,
        install our kit, import styles and you are good to go!
      </p>
      <h2 id="overriding">Overriding styles</h2>
      <p>
        As seen in the code above, the class naming is very straightforward and
        easy to work with. Many components share the same class naming as
        Bootstrap, but we have many custom components too.
      </p>
      <p>
        The important fact is that during the development, we tried to reduce
        the CSS specificity to minimum. We worked with many libraries and
        sometimes it is really pain to style elements which look something like
        this:
      </p>
      <p>
        <code>
          .select .select-container.select-container__open
          .select-item.select-item__selected .icon
        </code>
      </p>
      <p>
        We hate it, you hate it and it's just a pain to style it. And because of
        that, we tried to reduce the specificity to maximum of 2. There might be
        some exception, but otherwise, we tried our best to deliver the best
        developing experience.
      </p>
      <h2 id="theming">Theming with CSS Variables</h2>
      <p>
        This has been a big topic. We want to deliver an amazing experience for
        developers and this is no exception. We decided to leverage{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
          target="_blank"
          rel="noreferrer noopener"
        >
          CSS Variables
        </a>{' '}
        instead of complicated injects, stylesheets and other dependencies that
        require a lot of initialization.
      </p>
      <p>
        Using CSS variables however comes with a cost. If you intent to support
        all browsers, it might be problematics, you can check the browser
        support{' '}
        <ExtLink href="https://caniuse.com/#feat=css-variables">here</ExtLink>.
        Browser support can be resolved by adding{' '}
        <ExtLink href="https://github.com/jhildenbiddle/css-vars-ponyfill">
          css-var-ponyfill
        </ExtLink>
        .
      </p>
      <h3 id="custom-theme">Creating custom theme</h3>
      <p>
        This cannot be easier. On the right part of the top bar, you can switch
        between light and dark theme. By default, light theme is enabled. We
        created a dark theme for you as well, this is how the code looks like:
      </p>
      <Code language={CodeLang.css}>
        {`body {
  --bg-main: #252529;
  --bg-base: #2c2c31;
  --border-color-base: #34343a;
  --border-color-main: #44444e;
  --border-color-highlight: #64646e;
  --text-base: #ccc;
  --text-main: #ddd;
  --text-tertiary: #666;
}`}
      </Code>
      <p>
        With few lines of code, we changed the core appearence of the
        documentation, amazing isn't it? You can add this code into your CSS
        file or add it somewhere in the JSX with inline styles.
      </p>
      <Code>
        {`<style>
  body {
    --bg-main: #252529;
    ...
  }
</style>`}
      </Code>
      <p>
        You can also override variables localy, for example navigation panel
        only.
      </p>
      <Code language={CodeLang.css}>
        {`.my-nav-panel {
  --bg-main: #252529;
  ...
}`}
      </Code>
      <h3 id="css-vars">Using CSS variables in your (S)CSS</h3>
      <p>You can use your css variables like so</p>
      <Code language={CodeLang.css}>
        {`.my-class {
  color: var(--color-primary);
}`}
      </Code>
      <p>
        Or you can import or Sass vars file (recommended) to make sure that your
        conde is consistent, which will output the code above.
      </p>
      <Code language={CodeLang.css}>
        {`@import '@duik/core/_vars.scss';
.my-class {
  color: $color-primary;
}`}
      </Code>
      <h3 id="css-vars-list">List of CSS variables</h3>
      <Widget className={cls.csstable}>
        <WidgetTable>
          {colors.map(item => (
            <>
              <thead>
                <tr>
                  <th>Default Value</th>
                  <th>{item.title}</th>
                  <th>Sass Variable</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {item.colors.map(color => (
                  <tr key={color.name}>
                    <td>
                      <div className={cls.csstableDefaultValue}>
                        <div
                          className={cls.cssValue}
                          style={(color.d && { background: color.d }) || {}}
                        />
                        {`${color.d}`.toUpperCase()}
                      </div>
                    </td>
                    <td>{color.name}</td>
                    <td>{color.css}</td>
                    <td>{color.desc}</td>
                  </tr>
                ))}
              </tbody>
            </>
          ))}
        </WidgetTable>
      </Widget>
    </DocsContentPage>
  );
};

export default CustomizingTheme;
