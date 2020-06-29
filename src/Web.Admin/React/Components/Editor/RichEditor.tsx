import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

interface IProps {
  value: string,
  name: string,
  handleChange?: (content: string) => void,
  handleBlur?: (event: FocusEvent, content: string) => void,
}

export default (props: IProps): React.ReactElement => {
  const {
    value, name, handleChange, handleBlur,
  } = props;

  return (
    <SunEditor
      name={name}
      setContents={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
