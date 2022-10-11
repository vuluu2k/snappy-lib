import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propsTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  classNameContent: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleLeft: PropTypes.node,
  titleRight: PropTypes.node,
};
const defaultProps = {
  titleLeft: 'SnappyExpress',
};

function SnyCardWrapper({
  children,
  className,
  classNameContent,
  styleContent,
  style,
  titleLeft,
  titleRight,
}) {
  return (
    <div
      className={classNames('sny-card sny-card-wrapper', className)}
      style={style}
    >
      {(titleLeft || titleRight) && (
        <div className="sny-card-title">
          <div className="sny-card-title-left">{titleLeft}</div>
          <div className="sny-card-title-right">{titleRight}</div>
        </div>
      )}
      <div
        className={classNames('sny-card-content', classNameContent)}
        style={styleContent}
      >
        {children}
      </div>
    </div>
  );
}

SnyCardWrapper.propsTypes = propsTypes;
SnyCardWrapper.defaultProps = defaultProps;

export default SnyCardWrapper;
