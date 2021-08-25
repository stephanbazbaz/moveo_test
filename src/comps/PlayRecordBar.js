import React from 'react';
import './style.scss';
import PLAY from '../assets/media-play_2.svg';
import STOP from '../assets/stop_6.svg';
import RECORD from '../assets/red-circle.svg'
export default function PlayRecordBar({ startLoop, stopLoop }) {


    return (
        <div className='play-record-container'>
            <img onClick={startLoop} src={PLAY} />
            <img onClick={stopLoop} src={STOP} />
            <img className='record-btn' src={RECORD} />
        </div>
    )
}
