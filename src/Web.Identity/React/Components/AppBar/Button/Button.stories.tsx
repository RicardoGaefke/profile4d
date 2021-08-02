import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';
import { withContext } from '../../../Initial/Context/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../../TypeScript/Interfaces/IInitialContext';

const Btn = (props: any): React.ReactElement => {
  const { context } = props;

  console.log(context);

  return (
    <Button>withContext</Button>
  );
};

const CtxBtn = withContext(Btn);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('With text', (): React.ReactElement => (
    <Button>Hello Button</Button>
  ))
  .add('With alert', (): React.ReactElement => (
    <Button onClick={(): void => alert('Clicked!')}>Alert Me</Button>
  ))
  .add('Default View', (): React.ReactElement => (
    <Button onClick={action('button-click')}>Hello World</Button>
  ))
  .add('Knobs Text', (): React.ReactElement => (
    <Button onClick={action('button-click')}>{text('Texto', 'Hello Storybook')}</Button>
  ))
  .add('withContext', (): React.ReactElement => (
    <CtxBtn />
  ));
