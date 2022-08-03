import { SnyButton } from 'snappy';


function Example(args) {
  return (
    <div>
      <SnyButton {...args} />
    </div>
  );
}

Example.args = {
  children: 'Snappy Express',
  type: 'primary',
  outline: false,
  size: undefined,
  block: false,
  active: false,
  close: false,
};

export default Example;