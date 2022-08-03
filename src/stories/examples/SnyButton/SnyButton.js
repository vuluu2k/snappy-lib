import React from 'react';
import { SnyButton } from 'snappy';
import { colors } from '../options';
import 'snappy/styles/common.css';

function Example(args) {
  return (
    <div>
      <SnyButton {...args} />
    </div>
  );
}
Example.args = {
  children: 'Snappy Express',
  type: 'primary',
  style: { width: 120 },
  size:'md',
};

Example.argTypes = {
  type: {
    control: { type: 'select' },
    options: colors,
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
  },
};

export default Example;
