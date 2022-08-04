import React from "react";

import "./MiniVideo.css";

function MiniVideo({ data }) {
  return (
    <div className="mini-video">
      <div className="mini-video-img">
        <img src={data.poster} alt="" />
      </div>
      <div className="mini-video-text">
        <h4>Gustavo Santaolalla - Babel - Otnicka Remix</h4>
        <p id="mini-channel-name">{data.channelName ? data.channelName : ""}</p>
        <div className="mini-video-data">
          <span>{309796} просмотров</span> <span id="dot"></span>{" "}
          <span id="mini-video-data">3 недели назад</span>
        </div>
      </div>
    </div>
  );
}

export default MiniVideo;
