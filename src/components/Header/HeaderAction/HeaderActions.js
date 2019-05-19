import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './HeaderAction.css';

HeaderAction.propTypes = {
  wrapperClassName: PropTypes.any,
  wrapperStyle: PropTypes.any,
  position: PropTypes.oneOf(['left', 'right'])
};

HeaderAction.defaultProps = {
  position: 'left'
};

export function HeaderAction(props) {
  const { wrapperClassName, wrapperStyle, className, children, position, ...restProps } = props;
  const Tag = props.href
    ? 'a'
    : props.to ? Link : 'button';

  return (
    <div
      style={wrapperStyle}
      className={classnames({
        'header-action': true,
        [wrapperClassName]: wrapperClassName,
        ['header-action_' + position]: true
      })}
    >
      <Tag className={classnames('header-action__inner', className)} {...restProps}>
        {children}
      </Tag>
    </div>
  );
}
