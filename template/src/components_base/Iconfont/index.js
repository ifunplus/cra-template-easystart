import PropTypes from 'prop-types';
import React, { Component } from 'react';
import iconFont from '../../static/iconfont/iconfont';
import isIconInIconfont from './iconfontList';
import { createFromIconfontCN } from '@ant-design/icons';

const Iconfont = createFromIconfontCN({
  scriptUrl: iconFont
});

class MyIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    spin: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    spin: false
  };

  constructor(props) {
    super(props);
    this.state = {
      inIconList: isIconInIconfont(props.type.substr(5))
    };
  }

  render() {
    const { type, style, spin, onClick } = this.props;
    const { inIconList } = this.state;
    const className = this.props.className ? this.props.className : '';
    if (inIconList) {
      return (
        <Iconfont className={className} type={type} style={style} spin={spin} onClick={onClick} />
      );
    } else {
      return null;
    }
  }
}

export default MyIcon;
