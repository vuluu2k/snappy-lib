import React from 'react';
import { SnyButton } from 'snappy';
import { colors } from '../options';
import 'snappy/styles/common.css';

function Example(args) {
  return (
    <>
      {colors.map((color) => (
        <SnyButton type={color} key={color} style={{ marginBottom: 8 }}>
          {color}
        </SnyButton>
      ))}
    </>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'There are colors with type props',
    },
  },
};
