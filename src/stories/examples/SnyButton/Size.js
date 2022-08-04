import React from 'react';
import { SnyButton } from 'snappy';
import { size } from '../options';
import 'snappy/styles/common.css';

function Example(args) {
  return (
    <>
      {size.map((s) => (
        <SnyButton size={s} key={s} type="primary" style={{ marginBottom: 8 }}>
          {s}
        </SnyButton>
      ))}
    </>
  );
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'There are sizes with size props',
    },
  },
};
