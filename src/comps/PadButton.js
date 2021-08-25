import React, { useRef, useEffect } from "react";
import './style.scss';
export default function PadButton({ sound, name, id, listArr, isLoopPlaying }) {
    const [isPlay, setIsPlay] = React.useState(false);
    const audio = useRef(new Audio(sound));
    // const [listArr, setlistArr] = React.useState([]);

    useEffect(() => {
        audio.current.preload = "none";
        audio.current.loop = true;
    }, [audio]);


    const playSound = (n) => {
        const index = listArr.indexOf(n);

        if (isPlay) {
            audio.current.pause();
            audio.current.currentTime = 0;
            setIsPlay(false);
            listArr.splice(index, 1)
            return;
        }
        if (!isLoopPlaying) {
            audio.current.play();

        }
        setIsPlay(true);
        listArr.push(n)
    }

    return (

        <div className='btn-warp'>
            <button
                className='pad-button demoObject'
                id={id}
                onClick={() => playSound(name)}>
                {name}
            </button>
        </div>

    );
}