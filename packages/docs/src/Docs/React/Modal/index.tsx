import * as React from 'react';
import {
  Button,
  useOpenState,
  Widget,
  FormGroupContainer,
  Radio,
  Modal,
} from '@duik/it';
import { H1, CodeRH } from 'components';

import {
  DocsContentPage,
  PageContent,
  ImportPath,
  PageMock,
} from '../../components';

import PropTable from './PropTable';

const exampleModalContent = (
  <>
    <Modal.Header>
      <Modal.Title>Can you guess the place?</Modal.Title>
    </Modal.Header>
    <img
      src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="mountains"
      style={{
        width: '100%',
      }}
    />
    <Modal.Body>
      <FormGroupContainer>
        <Radio name="question_1" label="Wyoming, US" />
        <Radio name="question_1" label="Dolomiti, Italy" />
        <Radio name="question_1" label="Pamir, Tajikistan" />
      </FormGroupContainer>
    </Modal.Body>
    <Modal.Footer>
      <Button primary>Submit Answer</Button>
    </Modal.Footer>
  </>
);

export const ReactDocsAvatar = () => {
  const modalOpenState = useOpenState(false);

  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: 'example', label: 'Example' },
          { id: 'props', label: 'Prop Table' },
        ]}
      />
      <H1>Modal</H1>
      <ImportPath name="Modal" />

      <Modal
        isOpen={modalOpenState.isOpen}
        handleClose={modalOpenState.handleClose}
        closeOnOuterClick
        sm
      >
        {exampleModalContent}
      </Modal>

      <p>
        Dashboard UI Kit gives you several components to effectively build nice
        and clean modals. Modals can be used anywhere in the code structure, the
        actuall DOM will be rendered in the <code>body</code> with help of{' '}
        <a
          href="https://reactjs.org/docs/portals.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          react portal
        </a>
        .
      </p>

      <PageMock center>
        <Widget style={{ maxWidth: 560 }}>{exampleModalContent}</Widget>
        <br />
        <Button primary onClick={modalOpenState.handleOpen}>
          Open as Modal
        </Button>
      </PageMock>
      <CodeRH
        code={`
<Modal
  isOpen={modalOpenState.isOpen}
  handleClose={modalOpenState.handleClose}
  closeOnOuterClick
  sm
>
  <Modal.Header>
    <Modal.Title>Can you guess the place?</Modal.Title>
  </Modal.Header>
  <img
    src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    style={{
      width: '100%',
    }}
  />
  <Modal.Body>
    <FormGroupContainer>
      <Radio name="question_1" label="Wyoming, US" />
      <Radio name="question_1" label="Dolomiti, Italy" />
      <Radio name="question_1" label="Pamir, Tajikistan" />
    </FormGroupContainer>
  </Modal.Body>
  <Modal.Footer>
    <Button primary>Submit Answer</Button>
  </Modal.Footer>
</Modal>
      `}
        content={
          <Modal
            isOpen={modalOpenState.isOpen}
            handleClose={modalOpenState.handleClose}
            sm
          >
            <Modal.Header>
              <Modal.Title>Can you guess the place?</Modal.Title>
            </Modal.Header>
            <img
              src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="mountains"
              style={{
                width: '100%',
              }}
            />
            <Modal.Body>
              <FormGroupContainer>
                <Radio name="question_1" label="Wyoming, US" />
                <Radio name="question_1" label="Dolomiti, Italy" />
                <Radio name="question_1" label="Pamir, Tajikistan" />
              </FormGroupContainer>
            </Modal.Body>
            <Modal.Footer>
              <Button primary>Submit Answer</Button>
            </Modal.Footer>
          </Modal>
        }
        contentHtml={
          <Modal
            isOpen={modalOpenState.isOpen}
            handleClose={modalOpenState.handleClose}
            sm
            disablePortal
          >
            {exampleModalContent}
          </Modal>
        }
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsAvatar;
