import React from 'react';
import { SnyStatus } from 'snappy';
import Props from '../Props';

function Example() {
  return <Props components={[SnyStatus]} />;
}

export default Example;


Example.parameters = {
  docs: {
    description: {
      story:
        'There are props use Status',
    },
  },
};