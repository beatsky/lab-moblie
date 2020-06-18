import React, { useState } from 'react';
import { Button, Stepper } from 'antd-mobile';
import styles from './index.scss';

export default () => {
  const [val, setValue] = useState(0);
  const onChange = (val: number) => {
    setValue(val);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ing</h1>
      <Button type="primary">录音</Button>
    </div>
  );
}
