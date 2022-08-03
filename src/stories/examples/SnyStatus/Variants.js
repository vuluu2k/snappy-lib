import React from 'react';
import { SnyStatus } from 'snappy';
import { colors_status } from '../options';
import 'snappy/styles/common.css';

function Example(args) {
  return (
    <>
      {colors_status.map((color) => (
        <SnyStatus type={color} key={color} style={{marginBottom:8}}>
          {color}
        </SnyStatus>
      ))}
    </>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story:
        'There are colors with type props',
    },
  },
};