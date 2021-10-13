import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
function TooltipComp(props) {
  return (
    <Tooltip placement={props.placement} title={props.title}>
      {props.children}
    </Tooltip>
  );
}

TooltipComp.propTypes = {
  children: PropTypes.any.isRequired,
  placement: PropTypes.string,
  title: PropTypes.string
};

TooltipComp.defaultProps = {
  placement: 'bottom'
};

export default TooltipComp;
