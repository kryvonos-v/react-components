import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './HeaderTitle.css';

HeaderTitle.propTypes = {
  className: PropTypes.string
};

export function HeaderTitle(props) {
  const { className, children, ...restProps } = props;

  return (
    <h1
      className={classnames('header-title', className)}
      {...restProps}
    >{props.children}</h1>
  );
}
