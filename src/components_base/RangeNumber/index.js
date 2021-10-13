import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, message } from 'antd';
import debounce from 'lodash/debounce';
import styles from './RangeNumber.module.css';

function index({ minNum, maxNum, size, width, onChange, disabled, vals }) {
  let MIN_NUM = minNum;
  let MAX_NUM = maxNum;

  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const validate = (value, type) => {
    switch (type) {
      case 'min':
        if (value < MIN_NUM) {
          message.warning('最小值不低于100');
          return;
        }
        if (value > MAX_NUM || (vals[1] && value > vals[1])) {
          message.warning('最小值不超过最大值，且低于100');
          return;
        }
        return true;
      case 'max':
        if (value > MAX_NUM) {
          message.warning('最大值不超过100');
          return;
        }
        if (value < MIN_NUM || (vals[0] && value < vals[0])) {
          message.warning('最大值要大于最小值，且不小于0');
          return;
        }
        return true;
      default:
        break;
    }
  };
  const onChangeMin = (evt) => {
    if (validate(evt.target.value, 'min')) {
      setMin(evt.target.value);
      onChange([evt.target.value, max]);
    }
  };
  const onChangeMax = (evt) => {
    if (validate(evt.target.value, 'max')) {
      setMax(evt.target.value);
      onChange([min, evt.target.value]);
    }
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <Input
        defaultValue={vals[0]}
        placeholder="Minimum"
        style={{ width: width }}
        disabled={disabled}
        className={styles.item__input}
        type="number"
        onChange={debounce(onChangeMin, 700)}
        size={size}
      />{' '}
      ~
      <Input
        defaultValue={vals[1]}
        placeholder="Maximum"
        style={{ width: width }}
        disabled={disabled}
        className={styles.item__input}
        type="number"
        onChange={debounce(onChangeMax, 700)}
        size={size}
      />
    </div>
  );
}

index.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string
};

index.defaultProps = {
  minNum: 0,
  maxNum: 150,
  size: 'small',
  width: 80,
  vals: [null, null]
};

export default index;
