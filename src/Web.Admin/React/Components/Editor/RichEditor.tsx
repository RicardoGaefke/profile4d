import React from 'react';
import dynamic from 'next/dynamic';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SunEditorReactProps } from 'suneditor-react';

const SunEditor = dynamic<SunEditorReactProps>(
  (): any => import('suneditor-react').then((mod): any => mod.default),
  { ssr: false },
);

interface IProps {
  value: string,
  name: string,
  handleChange?: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
  handleBlur?: (event: FocusEvent, content: string) => void,
}

export default (props: IProps): React.ReactElement => {
  const {
    value, name, handleChange, handleBlur,
  } = props;

  const onChange = (content: string): void => {
    if (handleChange) {
      handleChange(name, content);
    }
  };

  return (
    <>
      <SunEditor
        name={name}
        setContents={value}
        onChange={onChange}
        onBlur={handleBlur}
        width="100%"
        setOptions={{
          minHeight: 300,
          mode: 'classic',
          formats: ['p', 'h3'],
          buttonList: [
            ['undo', 'redo'],
            ['formatBlock'],
            ['bold', 'underline', 'italic', 'fontColor'],
            ['fullScreen', 'showBlocks', 'codeView'],
            ['preview', 'print'],
          ],
        }}
      />
    </>
  );
};
