import React from 'react';
import { SnyCardWrapper } from 'snappy';
function Example(args) {
  return (
    <div style={{ backgroundColor: '#D9DBEA' }}>
      <SnyCardWrapper {...args}>
        <table>
          <th>STT</th>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
        </table>
      </SnyCardWrapper>
    </div>
  );
}

Example.args = {
  titleLeft: 'SnappyExpress',
};

export default Example;
