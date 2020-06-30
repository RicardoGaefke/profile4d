import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

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
    <SunEditor
      name={name}
      setContents={value}
      onChange={onChange}
      onBlur={handleBlur}
      width="100%"
    />
  );
};
