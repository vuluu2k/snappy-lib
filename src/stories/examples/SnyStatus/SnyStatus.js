import { SnyStatus } from 'snappy';

import { colors_status } from '../options';

function Example(args) {
  return (
    <div align="center">
      <SnyStatus {...args} />
      <br />
      <div>---base is profile for express---</div>
      <br />
      <SnyStatus {...args} base />
    </div>
  );
}

Example.args = {
  text: 'Snappy Express',
  type: 'green',
  style: { width: 120 },
  status: undefined,
  status_vi: 'SnappyExpress',
  label: undefined,
  children: undefined,
  tooltip: {},
  badge: {},
  className: '',
};

Example.argTypes = {
  type: {
    control: { type: 'select' },
    options: colors_status,
  },
};

export default Example;
