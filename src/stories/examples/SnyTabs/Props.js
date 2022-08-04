import React from 'react';
import { SnyTabs } from 'snappy';
import Props from '../Props';

function Example() {
  return <Props components={[SnyTabs]} />;
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'There are props use Tabs',
    },
  },
};
