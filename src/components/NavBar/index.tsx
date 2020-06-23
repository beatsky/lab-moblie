import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { NavBar, Icon } from 'antd-mobile';

export default () => {
  const [value, setValue] = useState('美食');
  useEffect(() => {
    // this.autoFocusInst.focus();
  });

    return (<div style={{ borderBottom: '6px solid #efeff4' }}>
      <NavBar
        mode="light"
        icon={history.location.pathname !== '/' && <Icon type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >远程实验平台</NavBar>
      {/* <SearchBar placeholder="Search" maxLength={8} /> */}
    </div>);
}


