import React from 'react';
import { SnyButton } from 'snappy';
import Props from '../Props';

function Example() {
  return <Props components={[SnyButton]} />;
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'There are props use Button',
    },
  },
};
