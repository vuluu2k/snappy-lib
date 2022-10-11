import { UserOutlined } from '@ant-design/icons';
import React from 'react';

import { SnyCardWrapper, SnyButton } from 'snappy';
function Example(args) {
  return (
    <div style={{ backgroundColor: '#D9DBEA' }}>
      <SnyCardWrapper
        {...args}
        titleRight={<SnyButton type="primary" />}
        onClickTitle={() => alert(`Hello I'm Snappy Express`)}
      >
        <table width="100%">
          <th>STT</th>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
          <tr align="center">
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
          <tr align="center">
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
          <tr align="center">
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
  titleRight: null,
  icon: <UserOutlined />,
};

export default Example;
