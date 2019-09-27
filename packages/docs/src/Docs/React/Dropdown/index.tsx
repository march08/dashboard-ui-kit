import * as React from 'react';
import { Link } from 'react-router-dom';
import { H1 } from 'components';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenuPosition,
  DropdownButtonProps
} from '@duik/it';

import { Icon } from '@duik/icon';

import {
  DocsContentPage,
  ExampleTable,
  PageContent,
  ImportPath
} from '../../components';

import PropTable from './PropTable';

const ExampleButton = ({
  handleToggle,
  handleClose,
  handleOpen,
  setOpenState,
  isOpen
}: DropdownButtonProps) => (
  <Button success onClick={handleToggle} square className="dropdown-toggle">
    <Icon>edit</Icon>
  </Button>
);

export const ReactDocsButton = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'basics', label: 'Basic Usage' },
          { id: 'control', label: 'Dropdown UI state control' },
          { id: 'menu-position', label: 'Positioning the dropdown menu' },
          { id: 'dropdown-content', label: 'Custom content in the dropdown' },
          { id: 'button', label: 'Custom button component' },
          { id: 'props-dropdown', label: 'Dropdown props' },
          { id: 'props-dropdown-item', label: 'DropdownItem props' }
        ]}
      />
      <H1>Dropdown</H1>
      <ImportPath
        name="Dropdown"
        subComponents={['DropdownItem', 'DropdownMenu']}
      />
      <br />
      <p>Use buttons in forms, as links with many varieties.</p>

      <h2 id="basics">Basic Usage</h2>
      <p>
        You can control apperence by simply passing boolean props to render some
        predefined stylings or you can pass your className or style props as
        well.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <Dropdown buttonText={<strong>Click me</strong>}>
                <DropdownItem>
                  <Icon mr>camera</Icon>Item 1
                </DropdownItem>
                <DropdownItem>
                  <Icon mr>stats</Icon>Item 1
                </DropdownItem>
                <DropdownItem Component={Link} to="#somewhere">
                  <Icon mr>tap_click_force_touch</Icon>Item as Link
                </DropdownItem>
              </Dropdown>
            ),
            code: `<Dropdown buttonText={<strong>Click me</strong>}>
  <DropdownItem>
    <Icon mr>camera</Icon>Item 1
  </DropdownItem>
  <DropdownItem>
    <Icon mr>stats</Icon>Item 1
  </DropdownItem>
  <DropdownItem Component={Link} to="#somewhere">
    <Icon mr>tap_click_force_touch</Icon>Item as Link
  </DropdownItem>
</Dropdown>`
          }
        ]}
      />

      <h2 id="basics">Close on option click</h2>
      <p>
        By default, the dropdown doesn't close when you click on the dropdown
        item. This is intentional. If you want to close the dropdown after
        clicking the option, you can pass <code>closeOnOptionClick</code> prop
        as true. If you want to have a better control and decide per item, then
        check the <Link to="#control">example below</Link>.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <Dropdown
                closeOnOptionClick
                buttonText={<strong>Click me</strong>}
              >
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem Component={Link} to="#somewhere">
                  Item as Link
                </DropdownItem>
              </Dropdown>
            ),
            code: `<Dropdown buttonText={<strong>Click me</strong>}>
<DropdownItem>Item 1</DropdownItem>
<DropdownItem>Item 2</DropdownItem>
<DropdownItem Component={Link} to="#somewhere">Item as Link</DropdownItem>
</Dropdown>`
          }
        ]}
      />

      <h2 id="control">Better control over the dropdown</h2>
      <p>
        It wouldn't be really useful if you cannot control the state of the
        dropdown, for example you want to close the dropdown on selecting an
        option. Surely this could be implemented directly, but with this
        approach, we are giving you a better control over the state rather than
        enforcing the behaviour, especially when there are many use cases where
        you don't really want to close the dropdown.
      </p>
      <ExampleTable
        data={[
          {
            content: (
              <Dropdown>
                {({
                  handleClose,
                  handleOpen,
                  handleToggle,
                  setOpenState,
                  isOpen
                }) => (
                  <>
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem onClick={handleClose}>
                      Item 2 with close
                    </DropdownItem>
                  </>
                )}
              </Dropdown>
            ),
            code: `<Dropdown>
  {({ handleClose, handleOpen, handleToggle, setOpenState, isOpen }) => (
    <>
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem onClick={handleClose}>Item 2 with close</DropdownItem>
    </>
  )}
</Dropdown>`
          }
        ]}
      />

      <p>
        As it is clear from example, children can be a classic ReactNode or in
        this case a functional component format{' '}
        <code>{`(props) => <>Something</>`}</code> which can accept several
        handlers. In most cases, you want to use handleClose or handleToggle,
        but for conveniency, other handlers are exposed as well.{' '}
      </p>
      <p>
        The handlers are documented in{' '}
        <Link to="/docs/react/use-open-state">useOpenState</Link> hook
        documentation, which is used for handling the state of the dropdown.
      </p>

      <h2 id="menu-position">Menu position</h2>
      <p>
        By default, the menu position is set to bottom-right (bottom from the
        click element, overflowing to the right). You can change this by passing{' '}
        <code>menuPosition</code> prop. These values are supported
      </p>
      <ul style={{ paddingLeft: 30 }}>
        <li>bottom-left</li>
        <li>bottom-center</li>
        <li>bottom-right</li>
        <li>top-left</li>
        <li>top-center</li>
        <li>top-right</li>
        <li>left-top</li>
        <li>left-center</li>
        <li>left-bottom</li>
        <li>right-top</li>
        <li>right-center</li>
        <li>right-bottom</li>
      </ul>
      <p>
        For Typescript, enum <code>DropdownMenuPosition</code> is available.
      </p>
      <p>
        If the menu doesn't fit the window viewport, the default menu component
        will try to reposition itself automatically. You would need to perform
        this action by yourself if you use custom <code>MenuComponent</code> as
        a prop.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <Dropdown
                buttonText="Bottom Left"
                menuPosition={DropdownMenuPosition['bottom-left']}
              >
                <DropdownItem>Long Item to click</DropdownItem>
              </Dropdown>
            )
          },
          {
            content: (
              <Dropdown
                buttonText="Top Center"
                menuPosition={DropdownMenuPosition['top-center']}
              >
                <DropdownItem>Long Item to click</DropdownItem>
              </Dropdown>
            )
          },
          {
            content: (
              <Dropdown
                buttonText="Left Center"
                menuPosition={DropdownMenuPosition['left-center']}
              >
                <DropdownItem>Dropdown Item</DropdownItem>
                <DropdownItem>Dropdown Item</DropdownItem>
                <DropdownItem>Dropdown Item</DropdownItem>
              </Dropdown>
            )
          },
          {
            content: (
              <Dropdown
                buttonText="Right Bottom"
                menuPosition={DropdownMenuPosition['right-bottom']}
              >
                <DropdownItem>Dropdown Item</DropdownItem>
                <DropdownItem>Dropdown Item</DropdownItem>
                <DropdownItem>Dropdown Item</DropdownItem>
              </Dropdown>
            )
          }
        ]}
      />

      <h2 id="dropdown-content">Rendering Custom Content</h2>
      <p>
        In the previous examples, only <code>DropdownItem</code> has been used.
        However this doesn't mean that <code>Dropdown</code> limited to it.
        Let's render custom dropdown content.
      </p>
      <ExampleTable
        data={[
          {
            content: (
              <Dropdown
                buttonText="Upgrade Account"
                menuPosition={DropdownMenuPosition['top-right']}
              >
                {({
                  handleClose,
                  handleOpen,
                  handleToggle,
                  setOpenState,
                  isOpen
                }) => (
                  <div style={{ padding: 30, minWidth: 360 }}>
                    <h3>Would you like to upgrade your account for $10?</h3>
                    <div>
                      <Button primary onClick={handleClose}>
                        Upgrade to PRO
                      </Button>
                      &nbsp;
                      <Button onClick={handleClose}>Maybe later</Button>
                    </div>
                  </div>
                )}
              </Dropdown>
            ),
            code: `<Dropdown
  buttonText="Upgrade Account"
  menuPosition="bottom-left"
>
  {({ handleClose, handleOpen, handleToggle, setOpenState, isOpen }) => (
    <div style={{ padding: 30, minWidth: 360 }}>
      <h3>Would you like to upgrade your account for $10?</h3>
      <div>
        <Button primary onClick={handleClose}>Upgrade to PRO</Button>
        <Button onClick={handleClose}>Maybe later</Button>
      </div>
    </div>
  )}
</Dropdown>`
          }
        ]}
      />

      <h2 id="button">Custom Button Component</h2>
      <p>You have 2 ways how to customize the button.</p>
      <p>
        Simpler way, the clickable button component is{' '}
        <Link to="/docs/react/button">@duik/button</Link> in it's core. You can
        customize it by passing props to it with "buttonProps". See example
        below.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <Dropdown
                buttonProps={{
                  primary: true
                }}
                menuPosition={DropdownMenuPosition['bottom-left']}
              >
                <DropdownItem>Item to click</DropdownItem>
              </Dropdown>
            )
          }
        ]}
      />

      <h3>Hide the up down arrow</h3>
      <ExampleTable
        data={[
          {
            content: (
              <Dropdown
                buttonProps={{
                  primary: true,
                  hideArrows: true
                }}
                menuPosition={DropdownMenuPosition['bottom-left']}
              >
                <DropdownItem>Item to click</DropdownItem>
              </Dropdown>
            )
          }
        ]}
      />

      <p>
        You can also define totally new Button component and pass it to the{' '}
        <code>Dropdown</code>! Your component should accept{' '}
        <Link to="/docs/react/use-open-state">useOpenState</Link> handlers. See
        example below.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <Dropdown
                ButtonComponent={ExampleButton}
                menuPosition={DropdownMenuPosition['top-right']}
              >
                <DropdownItem>Item to click</DropdownItem>
              </Dropdown>
            ),
            code: `import { DropdownButtonProps, Button } from '@duik/it'

// Defining button (TS), don't forget class "dropdown-toggle"
const ExampleButton = ({
  // useOpenState hook handlers
  handleToggle, handleClose, handleOpen, setOpenState, isOpen
}: DropdownButtonProps) => (
  <Button success onClick={handleToggle} square>
    <Icon>edit</Icon>
  </Button>
)

// Using custom button
<Dropdown ButtonComponent={ExampleButton}>
  <DropdownItem>Item to click</DropdownItem>
</Dropdown>`
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsButton;
