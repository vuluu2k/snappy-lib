<p align="center">
  <a href="https://snappy.vn">
    <img width="200" src="https://statics.pancake.vn/user-content.pancake.vn/2022/7/29/24ee8173612cf7bd83ca4e3dfbc6443102dda90f.svg">
  </a>
</p>

<h1 align="center">React components custom for antd at Snappy.vn</h1>

<a href="https://github.com/LuuCongQuangVu">author: vuluu2k</a>

## 📦 Install

```bash
npm install snappy-express
```

```bash
yarn add snappy-express
```

## Attachment

```bash
npm install antd @ant-design/icons react-icons
```

```bash
yarn add antd @ant-design/icons react-icons
```

## 🔨 Usage

```jsx
import { SnyButton, SnyStatus } from 'snappy-express';

const App = () => (
  <>
    <SnyButton type="primary">Snappy</SnyButton>
    <SnyStatus statusArray={[]} status="" status_vi="" />
  </>
);
```

# SnyStatus

<img src="https://statics.pancake.vn/user-content.pancake.vn/2022/7/29/af2faf6d24774c07488abf536e3caa73c473f29b.png" width="100%" />

```jsx
SnyStatus.propTypes = {
  statusArray: PropTypes.array,
  status: PropTypes.string,
  status_vi: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  tooltip: PropTypes.object,
  badge: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

SnyStatus.defaultProps = {
  statusArray: [
    { array: ['request_received', 'waiting_for_return', 'returning', 'part_delivery'], color: 'orange' },
    { array: ['processing_picked_up', 'out_for_delivery', 'picked_up'], color: 'blue' },
    { array: ['import_picking_warehouse', 'on_the_way', 'import_returning_warehouse', 'returned'], color: 'cyan' },
    { array: ['picked_up_fail', 'undeliverable', 'return_fail', 'canceled'], color: 'red' },
    { array: ['processing_on_the_way', 'on_the_way_returning', 'waiting_on_the_way'], color: 'purple' },
    { array: ['delivered'], color: 'green' },
  ],
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
```

# SnyButton

<img src="https://statics.pancake.vn/user-content.pancake.vn/2022/7/29/b6957c850f6dfa4ee99c2ba2b10a8fedf4e385a7.svg" width="100%" />

```jsx
SnyButton.propTypes = {
  label: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  suffixIcon: PropTypes.node,
  shape: PropTypes.string,
  badge: PropTypes.object,
  iconButton: PropTypes.bool,
  tooltip: PropTypes.object,
  template: PropTypes.string,
};

SnyButton.defaultProps = {
  label: 'SnappyExpress',
  type: 'default',
  size: 'md',
  style: {},
  icon: false,
  loading: false,
  onClick: e => e.isDefaultPrevented(),
  disabled: false,
  className: '',
  suffixIcon: false,
  shape: '',
  badge: {},
  iconButton: false,
  tooltip: {},
  template: '',
};
```

# SnyTabs

<img src="https://statics.pancake.vn/user-content.pancake.vn/2022/7/29/b6957c850f6dfa4ee99c2ba2b10a8fedf4e385a7.svg" width="100%" />

```jsx
SnyTabs.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
  style: PropTypes.object,
  styleTab: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arrayActive: PropTypes.array,
};

SnyTabs.defaultProps = {
  options: [
    { value: 1, label: 'SnappyExpress1' },
    { value: 2, label: 'SnappyExpress2' },
    { value: 3, label: 'SnappyExpress3' },
    { value: 4, label: 'SnappyExpress4' },
  ],
  onClick: (value, label) => console.log(value, label),
  style: {},
  styleTab: {},
  className: '',
  value: 1,
  arrayActive: [],
};
```
