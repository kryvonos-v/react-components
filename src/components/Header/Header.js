import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Header.css';

Header.propTypes = {
  transparent: PropTypes.bool,
  wide: PropTypes.bool
};

Header.defaultProps = {
  transparent: false,
  wide: false
};

export function Header(props) {
  return (
    <div className={classnames('header', props.className, {
      'header_transparent': props.transparent
    })}>
      {props.children}
    </div>
  );
}

export * from './HeaderAction/HeaderActions';
export * from './HeaderTitle/HeaderTitle';
