import { useState } from 'react';
import { SnyTabs } from 'snappy';

function Example(args) {
  const [value, setValue] = useState(args.value || 1);

  return (
    <div>
      <SnyTabs
        {...args}
        value={value}
        onClick={(value, _) => setValue(value)}
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
};

export default Example;
