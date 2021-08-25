import React from 'react'
export default function PlayRecordBar({ startLoop, stopLoop }) {



    return (
        <div className='play-record-container'>
            <button onClick={startLoop}>PLAY</button>
            <button onClick={stopLoop}>STOP</button>
            <button>RECORD</button>
        </div>
    )
}
