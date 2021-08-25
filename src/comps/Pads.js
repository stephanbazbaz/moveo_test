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
import NEWLOOP from '../assets/new_loop_1.mp3';
import PadButton from './PadButton';
import PlayRecordBar from './PlayRecordBar';
import MpcTitle from './MpcTitle'
import Screen from './Screen'
export default function Pads() {
    const [listArr, setlistArr] = React.useState([])
    const [isLoopPlaying, setisLoopPlaying] = React.useState(false)
    const [clearLoop, setclearLoop] = React.useState()

    const futureBeat = useRef(new Audio(FUTURE_FUNK_BEAT));
    const stutterBeat = useRef(new Audio(STUTTER_BREAKBEAT));
    const bass = useRef(new Audio(BASS));
    const guitar = useRef(new Audio(GUITAR));
    const fudStompy = useRef(new Audio(FUD_STOMPY));
    const grooveB = useRef(new Audio(GROOVE_B_TANGGU));
    const mazePerc = useRef(new Audio(MAZE_PERC));
    const pasGroove = useRef(new Audio(PAS3_GROOVE));
    const organSynth = useRef(new Audio(ORGAN_SYNTH));
    const newLoop = useRef(new Audio(NEWLOOP));
    var delaytime

    let padsArr = [
        { name: 'FUNK BEAT', sound: futureBeat },
        { name: 'BREAKBEAT', sound: stutterBeat },
        { name: 'BASS', sound: bass },
        { name: 'GUITAR', sound: guitar },
        { name: 'FUD STOMPY', sound: fudStompy },
        { name: 'TANGGU', sound: grooveB },
        { name: 'PERC', sound: mazePerc },
        { name: 'PAS3 GROOVE', sound: pasGroove },
        { name: 'ORGAN', sound: organSynth },
        { name: 'NEWLOOP', sound: newLoop },
    ]



    useEffect(() => {
        futureBeat.current.preload = "none";
        // futureBeat.current.loop = true;
        stutterBeat.current.preload = "none";
        // stutterBeat.current.loop = true;
        bass.current.preload = "none";
        // bass.current.loop = true;
        guitar.current.preload = "none";
        // guitar.current.loop = true;
        fudStompy.current.preload = "none";
        // fudStompy.current.loop = true;
        grooveB.current.preload = "none";
        // grooveB.current.loop = true;
        mazePerc.current.preload = "none";
        // mazePerc.current.loop = true;
        pasGroove.current.preload = "none";
        // pasGroove.current.loop = true;
        organSynth.current.preload = "none";
        // organSynth.current.loop = true;
        newLoop.current.preload = "none";
        // newLoop.current.loop = true;
    }, [futureBeat]);


    const startLoop = () => {
        // startcount()
        var t0 = performance.now()
        setisLoopPlaying(true)
        setclearLoop(setTimeout(() => {
            startLoop()
            if (listArr.length > 0) {
                for (let i = 0; i < listArr.length; i++) {
                    switch (listArr[i]) {
                        case futureBeat.current.src:
                            futureBeat.current.pause();
                            futureBeat.current.currentTime = 0;
                            futureBeat.current.play()
                            break;
                        case stutterBeat.current.src:
                            stutterBeat.current.pause();
                            stutterBeat.current.currentTime = 0;
                            stutterBeat.current.play()
                            break;
                        case bass.current.src:
                            bass.current.pause();
                            bass.current.currentTime = 0;
                            bass.current.play()
                            break;
                        case guitar.current.src:
                            guitar.current.pause();
                            guitar.current.currentTime = 0;
                            guitar.current.play()
                            break;
                        case fudStompy.current.src:
                            fudStompy.current.pause();
                            fudStompy.current.currentTime = 0;
                            fudStompy.current.play()
                            break;
                        case grooveB.current.src:
                            grooveB.current.pause();
                            grooveB.current.currentTime = 0;
                            grooveB.current.play()
                            break;
                        case mazePerc.current.src:
                            mazePerc.current.pause();
                            mazePerc.current.currentTime = 0;
                            mazePerc.current.play()
                            break;
                        case pasGroove.current.src:
                            pasGroove.current.pause();
                            pasGroove.current.currentTime = 0;
                            pasGroove.current.play()
                            break;
                        case organSynth.current.src:
                            organSynth.current.pause();
                            organSynth.current.currentTime = 0;
                            organSynth.current.play()
                            break;
                        case newLoop.current.src:
                            newLoop.current.pause();
                            newLoop.current.currentTime = 0;
                            newLoop.current.play()
                            break;

                        default:
                            break;
                    }

                }
                // audio1.current.play();

            }

            var t1 = performance.now()
            delaytime = (16000 - (t1 - t0))
            console.log(delaytime);
        }, delaytime > 7000 ? delaytime : 8000))

    }

    const stopLoop = () => {
        setlistArr([])
        setisLoopPlaying(false)
        clearTimeout(clearLoop)
        futureBeat.current.pause();
        futureBeat.current.currentTime = 0;
        stutterBeat.current.pause();
        stutterBeat.current.currentTime = 0;
        bass.current.pause();
        bass.current.currentTime = 0;
        guitar.current.pause();
        guitar.current.currentTime = 0;
        fudStompy.current.pause();
        fudStompy.current.currentTime = 0;
        grooveB.current.pause();
        grooveB.current.currentTime = 0;
        mazePerc.current.pause();
        mazePerc.current.currentTime = 0;
        pasGroove.current.pause();
        pasGroove.current.currentTime = 0;
        organSynth.current.pause();
        organSynth.current.currentTime = 0;
        newLoop.current.pause();
        newLoop.current.currentTime = 0;
    }

    return (
        <div className='pads-container'>
       
            <MpcTitle />
            <Screen />
            {padsArr.map((item, index) => {
                return (
                    <PadButton
                        isLoopPlaying={isLoopPlaying}
                        listArr={listArr}
                        key={index}
                        id={index}
                        sound={item.sound.current.src}
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
