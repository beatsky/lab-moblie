import React from 'react';
import { Stepper } from 'antd-mobile';
import { uploadVoice, getVoiceRes } from '@/api/index';
import Recorder from 'recorder-core'
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/wav'
import 'recorder-core/src/extensions/waveview'
import './style.scss'

class Voice extends React.Component {
  public rec: any
  public timer: any
  public endTimer: any
  public state = {
    recordSecond: 30,
    count: 0,
    recording: false,
    voiceResult: ''
  };
  public onChange = (recordSecond: number) => {
    this.setState({ recordSecond });
  }
  public startRecord = () => {
    if (this.state.recording) {
      clearInterval(this.timer)
      this.recStop();
      this.setState({ recording: !this.state.recording });
      return
    }
    this.recOpen(() => {
      this.recStart();
      this.startCount();
    });
  }
  
  public recOpen = (success: any) => {
    let wave:any;
    this.rec = Recorder({
      type: "wav",
      sampleRate: 16000,
      bitRate: 16,
      onProcess: (buffers, powerLevel, bufferDuration, bufferSampleRate, newBufferIdx, asyncEnd) => { 
        wave.input(buffers[buffers.length-1],powerLevel,bufferSampleRate);
      }
    });

    this.rec.open(() => {
      success && success();
      wave = Recorder.WaveView({elem:".wave"});
    }, (msg: string, isUserNotAllow: boolean) => {
      console.log((isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg);
    });
  };

  /**开始录音**/
  public recStart = () => {
    this.rec.start();
  };

  /**结束录音**/
  public recStop = () => {
    clearTimeout(this.endTimer);
    this.rec.stop((blob: any, duration: any) => {
      // console.log(blob, (window.URL || webkitURL).createObjectURL(blob), "时长:" + duration + "ms");
      this.rec.close();
      this.rec = null;

      uploadVoice(blob)
      this.getVoiceRes();

      /*** 【立即播放例子】 ***/
      // const audio=document.createElement("audio");
      // audio.controls=true;
      // document.body.appendChild(audio);
      // audio.src=(window.URL||webkitURL).createObjectURL(blob);
      // audio.play();
    }, (msg: string) => {
      console.log("录音失败:" + msg);
      this.rec.close();
      this.rec = null;
    });
  };

  public startCount = () => {
    this.setState({ recording: !this.state.recording });
    this.setState({ count: 0 });
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.endTimer = setTimeout(() => {
      this.setState({ recording: !this.state.recording });
      clearInterval(this.timer);
      this.recStop();
    }, this.state.recordSecond * 1000);
  }

  public getVoiceRes = async () => {
    console.log(111)
    let timer = setInterval(async () => {
      let voiceResult = await getVoiceRes();
      if (Boolean(voiceResult)) {
        clearInterval(timer);
        this.setState({ voiceResult });
      }
    }, 2000)
  }

  render() {
    return (
      <div>
        <div className="wave"></div>
        <div className="time">
          {this.state.count}
        </div>
        <div className="time">
          {this.state.voiceResult}
        </div>
        <div className="controls">
          <Stepper
            style={{ width: '200px', minWidth: '100px' }}
            showNumber
            min={0}
            recordSecondue={this.state.recordSecond}
            onChange={this.onChange}
          />
          <div
            className="voice-btn"
            style={{ background: this.state.recording ? 'none' : 'red' }}
            onClick={this.startRecord}>
            <div className="stop"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Voice;