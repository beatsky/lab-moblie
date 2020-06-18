import React from 'react';
import { Stepper } from 'antd-mobile';
import style from './style.scss'

class Voice extends React.Component {
  public state = {
    val: 30,
  };
  public onChange = (val: number) => {
    this.setState({ val });
  }
  render() {
    return (
      <div>
        <div className={style.controls}>
          <Stepper
            style={{ width: '200px', minWidth: '100px' }}
            showNumber
            min={0}
            value={this.state.val}
            onChange={this.onChange}
          />
          <div className={style['voice-btn']}>
            <div className={style.stop}></div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Voice;