import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useToggle } from '../src';

const Demo = () => {
  const [on, toggle] = useToggle(true);

  return (
    <div>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};

storiesOf('State|useToggle', module)
  .add('Demo', () => <Demo />);