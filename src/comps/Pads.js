import React, { useRef, useEffect } from 'react'
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
import NEWLOOP from '../assets/new_loop_1.mp3'
import PadButton from './PadButton'
import PlayRecordBar from './PlayRecordBar'
export default function Pads() {

    const audio = useRef(new Audio());
    useEffect(() => {
        audio.current.preload = "none";
        audio.current.loop = true;
    }, [audio]);
    const [listArr, setlistArr] = React.useState([])
    const [isLoopPlaying, setisLoopPlaying] = React.useState(false)
    const [clearLoop, setclearLoop] = React.useState()

    const startLoop = () => {
        setisLoopPlaying(true)
        setclearLoop(setTimeout(() => {
            startLoop()
            if (listArr.length > 0) {
                audio.current.src = listArr[0]
                audio.current.play();
                console.log(audio);
            }
        }, 8000))
    }
    const stopLoop = () => {
        clearTimeout(clearLoop)
        audio.current.pause();
        audio.current.currentTime = 0;
    }
    return (
        <div className='pads-container'>
            {padsArr.map((item, index) => {
                return (
                    <PadButton
                        isLoopPlaying={isLoopPlaying}
                        listArr={listArr}
                        key={index}
                        id={index}
                        sound={item.sound}
                        name={item.name}
                    />
                )
            })}
            <PlayRecordBar
                startLoop={startLoop}
                stopLoop={stopLoop}
            />

        </div>
    )
}
let padsArr = [
    { name: 'FUNK BEAT', sound: FUTURE_FUNK_BEAT },
    { name: 'BREAKBEAT', sound: STUTTER_BREAKBEAT },
    { name: 'BASS', sound: BASS },
    { name: 'GUITAR', sound: GUITAR },
    { name: 'FUD STOMPY', sound: FUD_STOMPY },
    { name: 'TANGGU', sound: GROOVE_B_TANGGU },
    { name: 'PERC', sound: MAZE_PERC },
    { name: 'PAS3 GROOVE', sound: PAS3_GROOVE },
    { name: 'ORGAN', sound: ORGAN_SYNTH },
    { name: 'NEWLOOP', sound: NEWLOOP },
]