import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Badge } from 'antd';

const trackingStatus = [
  { name: 'request_received', text: 'Chờ lấy hàng' },
  { name: 'processing_picked_up', text: 'Đang lấy hàng' },
  { name: 'import_picking_warehouse', text: 'Nhập kho lấy' },
  { name: 'import_returning_warehouse', text: 'Nhập kho hoàn' },
  { name: 'picked_up_fail', text: 'Chưa lấy được hàng' },
  { name: 'picked_up', text: 'Đã lấy' },
  { name: 'waiting_on_the_way', text: 'Chờ trung chuyển' },
  { name: 'processing_on_the_way', text: 'Đang trung chuyển' },
  { name: 'on_the_way', text: 'Đang trong kho' },
  { name: 'out_for_delivery', text: 'Đang giao' },
  { name: 'part_delivery', text: 'Giao một phần' },
  { name: 'delivered', text: 'Giao thành công' },
  { name: 'undeliverable', text: 'Giao không thành' },
  { name: 'waiting_for_return', text: 'Chờ hoàn' },
  { name: 'on_the_way_returning', text: 'Trung chuyển hoàn' },
  { name: 'returning', text: 'Đang hoàn' },
  { name: 'returned', text: 'Đã hoàn' },
  { name: 'canceled', text: 'Đã hủy' },
];

export default class SnyStatus extends Component {
  render() {
    const { status, statusArray, status_vi, type, label, children, tooltip, badge, style, className, base } = this.props;

    const checkStatus = statusArray.find(item => item.array.includes(status));

    return (
      <Tooltip {...tooltip}>
        <Badge {...badge}>
          <div
            className={`sny-status ${base && 'base'} ${status && 'w-148'} ${base ? `base-${type}` : type} ${
              checkStatus && (base ? `base-${checkStatus?.color}` : checkStatus?.color)
            } ${className}`}
            style={style}>
            {label || children || status_vi || trackingStatus.find(item => item.name === status)?.text || 'SnappyExpress'}
          </div>
        </Badge>
      </Tooltip>
    );
  }
}

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
