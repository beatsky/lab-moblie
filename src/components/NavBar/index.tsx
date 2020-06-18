import React, { useState, useEffect } from 'react';
import { SearchBar } from 'antd-mobile';

export default () => {
  const [value, setValue] = useState('美食');
  useEffect(() => {
    // this.autoFocusInst.focus();
  });
  const onChange = (value) => {
    setValue(value);
  };
  const clear = () => {
    setValue('');
  };

    return (<div>
      <SearchBar placeholder="Search" maxLength={8} />
    </div>);
}


