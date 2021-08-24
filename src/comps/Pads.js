import React from 'react'
import './style.scss';
import FUTURE_FUNK_BEAT from '../assets/120_future_funk_beats_25.mp3';
import STUTTER_BREAKBEAT from '../assets/120_stutter_breakbeats_16.mp3';
import BASS from '../assets/Bass Warwick heavy funk groove on E 120 BPM.mp3';
import GUITAR from '../assets/electric guitar coutry slide 120bpm - B.mp3';
import FUD_STOMPY from '../assets/FUD_120_StompySlosh.mp3';
import GROOVE_B_TANGGU from '../assets/GrooveB_120bpm_Tanggu.mp3';
import MAZE_PERC from '../assets/MazePolitics_120_Perc.mp3';
import PAS3_GROOVE from '../assets/PAS3GROOVE1.03B.mp3';
import ORGAN_SYNTH from '../assets/SilentStar_120_Em_OrganSynth.mp3';
import PadButton from './PadButton'

export default function Pads() {


    return (
        <div>
            {padsArr.map((item, index) => {
                return (
                    <div key={index}>
                        <PadButton
                            sound={item.sound}
                            name={item.name}
                        />
                    </div>
                )
            })}
        </div>
    )
}
let padsArr = [
    { name: 'FUTURE_FUNK_BEAT', sound: FUTURE_FUNK_BEAT },
    { name: 'STUTTER_BREAKBEAT', sound: STUTTER_BREAKBEAT },
    { name: 'BASS', sound: BASS },
    { name: 'GUITAR', sound: GUITAR },
    { name: 'FUD_STOMPY', sound: FUD_STOMPY },
    { name: 'GROOVE_B_TANGGU', sound: GROOVE_B_TANGGU },
    { name: 'MAZE_PERC', sound: MAZE_PERC },
    { name: 'PAS3_GROOVE', sound: PAS3_GROOVE },
    { name: 'ORGAN_SYNTH', sound: ORGAN_SYNTH },
]