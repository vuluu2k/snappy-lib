import { useState } from 'react';
import { SnyTabs } from 'snappy';

function Example(args) {
  const [value, setValue] = useState(args.value || 1);

  return (
    <div>
      <SnyTabs
        {...args}
        value={value}
        onchange={(event) => setValue(event.value)}
      />
    </div>
  );
}

Example.args = {
  options: [
    { value: 1, label: 'Tất cả' },
    { value: 2, label: 'Đang giao' },
    { value: 3, label: 'Hoàn thành công' },
    { value: 4, label: 'Hoàn thất bại' },
  ],
  value: 1,
  status: undefined,
  status_vi: 'SnappyExpress',
  type: '',
  label: undefined,
  children: undefined,
  tooltip: {},
  badge: {},
  style: {},
  className: '',
};

export default Example;
