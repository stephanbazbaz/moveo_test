import React from "react";
import "./style.scss";
import "./recordStyle.scss";
import { Play } from "./Play";
import { Stop } from "./Stop";
export default function PlayRecordBar({ playRecordedSession, isLoopPlaying, startLoop, stopLoop, recordSession }) {

  return (
    <div className='play-bar-warp'
      style={{
        border: "1px solid #e955e5",
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: 'space-evenly',
          alignItems: 'center',
          cursor: "pointer"
        }}
      >
      
        {!isLoopPlaying ? (
          <div className="play-btn" onClick={startLoop} style={{ width: 50 }}>
          <div className="play-hover">Play Loop</div>
            <Play />
          </div>
        ) : (
            <div onClick={stopLoop} style={{ width: 50 }}>
            
              <Stop />
            </div>
          )}
        <div className='recorder-container'>
          <input type='checkbox' id='btn' />
          <label htmlFor='btn' onClick={recordSession}></label>
          <div className='time'>
            <div className='h_m'></div>
            <div className='s_ms'></div>
          </div>
        </div>
        
        <div className="play-session-btn" onClick={() => playRecordedSession()} style={{
           width: 50,
           transform: "rotateY(180deg)"
           }}>
           <div className="session-hover">Play Session</div>
            <Play />
          </div>
      </div>
    </div>
  );
}
