import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Tooltip } from 'antd';
import Icon, { LoadingOutlined, CommentOutlined, RetweetOutlined } from '@ant-design/icons';
import { AiFillEdit, AiFillDelete, AiFillYoutube, AiFillAudio, AiFillCustomerService, AiFillApi, AiFillSetting, AiOutlinePlus } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { IoImageSharp } from 'react-icons/io5';

export const SnyButton = ({
  label,
  type,
  size,
  style,
  children,
  icon,
  loading,
  onClick,
  disabled,
  className,
  suffixIcon,
  badge,
  shape,
  iconButton,
  tooltip,
  template,
}) => {
  if (shape === 'circle' || template)
    return (
      <div>
        <Tooltip {...tooltip}>
          <Badge {...badge}>
            <div
              onClick={(!disabled && onClick) || (e => e.isDefaultPrevented())}
              className={`sny-button circle ${size} ${template} ${(disabled && 'disabled') || type} ${className}`}
              style={style}>
              {(loading && <LoadingOutlined />) ||
                (template && (
                  <Icon
                    component={
                      (template === 'edit' && AiFillEdit) ||
                      (template === 'delete' && AiFillDelete) ||
                      (template === 'view' && BsFillEyeFill) ||
                      (template === 'message' && CommentOutlined) ||
                      (template === 'video' && AiFillYoutube) ||
                      (template === 'audio' && AiFillAudio) ||
                      (template === 'image' && IoImageSharp) ||
                      (template === 'retweet' && RetweetOutlined) ||
                      (template === 'service' && AiFillCustomerService) ||
                      (template === 'plus' && AiOutlinePlus) ||
                      (template === 'api' && AiFillApi) ||
                      (template === 'setting' && AiFillSetting)
                    }
                  />
                )) ||
                icon}
            </div>
          </Badge>
        </Tooltip>
      </div>
    );

  return (
    <div>
      <Tooltip {...tooltip}>
        <Badge {...badge}>
          <div
            onClick={(!disabled && onClick) || (e => e.isDefaultPrevented())}
            className={`sny-button ${iconButton && 'icon-button'} ${(disabled && 'disabled') || type} ${size} ${className}`}
            style={style}>
            {icon && <div>{(loading && <LoadingOutlined />) || icon}</div>}
            {!iconButton && <div className={(icon && 'ml-8') || ''}>{children || label}</div>}
            {suffixIcon && <div className="ml-8">{suffixIcon}</div>}
          </div>
        </Badge>
      </Tooltip>
    </div>
  );
};

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
