import React, { useState } from "react";
import "./style.scss";

export default function PadButton({ onPlay, onStop, name }) {
  const [isPlaying, setIsPlaying] = useState();
  return (
    <div className="btn-warp">
      <button
        className="pad-button demoObject"
        style={{ border: isPlaying ? "1px solid #e955e5" : "" }}
        onClick={() => {
          if (isPlaying) {
            setIsPlaying(false);
            onStop();
            return;
          }
          setIsPlaying(true);
          onPlay();
        }}
      >
        {name}
      </button>
    </div>
  );
}
