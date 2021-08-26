import React, { useRef, useState } from "react";

import "./style.scss";

//Import all sound loops
import KICK from "../assets/NEWLOOPS/1 1-GHS_123_Filo_Kick_Clap.mp3";
import TOPLOOP from "../assets/NEWLOOPS/1 2-hk_top125_funkdirt.mp3";
import BASS from "../assets/NEWLOOPS/1 3-GHS_123_Gm_Sun_Synth_Bass.mp3";
import GUITAR from "../assets/NEWLOOPS/1 4-hk_gtr125_frisco_Gm.mp3";
import GUITAR2 from "../assets/NEWLOOPS/1 5-hk_gtr125_pickcut_Gm.mp3";
import KEYS from "../assets/NEWLOOPS/1 6-hk_syn125_holdme1_Gm.mp3";
import SHAKER from "../assets/NEWLOOPS/1 7-hk_top125_latint.mp3";
import PERC from "../assets/NEWLOOPS/1 8-hk_top125_zulu.mp3";
import ORGAN_SYNTH from "../assets/NEWLOOPS/1 9-hk_mus125_lovefunk2_Gm.mp3";
import RIDE from "../assets/NEWLOOPS/1 10-HTH_129_Drums_19_Ride.mp3";

//Import components
import PadButton from "./PadButton";
import PlayRecordBar from "./PlayRecordBar";
import MpcTitle from "./MpcTitle";

let soundsNames = [
  "KICK",
  "DRUM LOOP",
  "BASS",
  "GUITAR ONE",
  "GUITAR TWO",
  "KEYS",
  "SHAKER",
  "PERC",
  "ORGAN",
  "RIDE",
];

export default function Pads({ setIsSpining }) {
  const [soundsToPlay, setSoundsToPlay] = useState([]);
  const [isLoopPlaying, setIsLoopPlaying] = useState(false);
  const [loopTimeoutId, setLoopTimeoutId] = useState();
  const [isRecording, setisRecording] = useState(false)
  const soundsToPlayRef = useRef(soundsToPlay);
  soundsToPlayRef.current = soundsToPlay;

  //Intialize ref for html Audio Objects
  const soundRefs = useRef([
    new Audio(KICK),
    new Audio(TOPLOOP),
    new Audio(BASS),
    new Audio(GUITAR),
    new Audio(GUITAR2),
    new Audio(KEYS),
    new Audio(SHAKER),
    new Audio(PERC),
    new Audio(ORGAN_SYNTH),
    new Audio(RIDE),
  ]);

  //Play selected sounds
  const playSounds = () => {
    soundsToPlayRef.current.forEach((index) => {
      soundRefs.current[index].currentTime = 0;
      soundRefs.current[index].play();
    });
  };

  //Starts the loop and invoke the function every 8 seconds
  const startLoop = () => {
    if (soundsToPlay.length === 0) {
      return;
    }
    setIsSpining('disco-ball App-logo')
    playSounds(soundsToPlay);
    const loopTimeoutId = setTimeout((soundsToPlay) => {
      startLoop(soundsToPlay);
    }, 8000);
    setLoopTimeoutId(loopTimeoutId);
  };

  //Stops the loop
  const stopLoop = () => {
    setIsSpining('disco-ball')
    clearTimeout(loopTimeoutId);
    setIsLoopPlaying(false);
    setSoundsToPlay([]);
    soundRefs.current.forEach((soundRef) => {
      soundRef.pause();
      soundRef.currentTime = 0;
    });
  };

  //Adds a sound to the sounds array when on play
  const onPlay = (index) => {
    if (soundsToPlay.indexOf(index) < 0) {
      setSoundsToPlay([...soundsToPlay, index]);
    }
  };

  //Removes a sound from the sounds array when on play
  const onStop = (index) => {
    soundRefs.current[index].pause();
    soundRefs.current.currentTime = 0;
    setSoundsToPlay(soundsToPlay.filter((i) => i !== index));
  };

  //Records the session to local storage
  const recordSession = () => {
    setisRecording(!isRecording)
    if (!isRecording) {
      console.log('recording');
      return
    }
    localStorage.setItem("RECORDING", JSON.stringify(soundsToPlay))
    console.log('stop recording');
  }

  //Plays the recorded session
  const playRecordedSession = () => {
    const session = JSON.parse(localStorage.getItem("RECORDING"))
    session.forEach((item) => {
      soundRefs.current[item].currentTime = 0;
      soundRefs.current[item].play();
    });
    console.log(session);
  }
  return (
    <div className="pads-container">
      <MpcTitle />
      <PlayRecordBar
        playRecordedSession={playRecordedSession}
        recordSession={recordSession}
        isLoopPlaying={isLoopPlaying}
        startLoop={() => {
          if (!isLoopPlaying && soundsToPlay.length > 0) {
            setIsLoopPlaying(true);
            startLoop();
          } else {
            alert("choose at least one sound");
          }
        }}
        stopLoop={stopLoop}
      />

      {soundsNames.map((name, index) => (
        <PadButton
          key={index}
          name={name}
          onPlay={() => onPlay(index)}
          onStop={() => onStop(index)}
        />
      ))}
    </div>
  );
}
