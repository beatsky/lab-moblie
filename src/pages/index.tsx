import React, { useState } from 'react';
import { Button, List } from 'antd-mobile';
import { history } from 'umi';
import './index.scss';

const Item = List.Item;
const Brief = Item.Brief;

const routerJump = (path: string) => {
  history.push(path)
}

export default () => {
  const [val, setValue] = useState(0);
  const onChange = (val: number) => {
    setValue(val);
  }
  return (
    <div className="container">
      <List renderHeader={() => 'Menu'} className="my-list">
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {routerJump('voice')}}
          platform="android"
        >
          录音
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
    </div>
  );
}
