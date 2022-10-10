import React from 'react';
import { SnyInputOtp } from 'snappy';
import Props from '../Props';

function Example() {
  return <Props components={[SnyInputOtp]} />;
}

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'There are props use Input OTP',
    },
  },
};
