import React from 'react'

export default function PadButton({ sound, name }) {

    const [isPlay, setisPlay] = React.useState(true)

    let myAudio
    const playSound = (soundSrc) => {
        myAudio = new Audio(soundSrc);
        console.log(myAudio);
        myAudio.preload = 'none'
        myAudio.loop = true

        if (isPlay) {
            myAudio.play()
            setisPlay(false)
        }
        else {
            myAudio.pause()
            myAudio.currentTime = 0;
        }
    }
    return (
        <button
            onClick={() => playSound(sound)}
        >{name}</button>
    )
}
