import React from "react";
import { Link } from "react-router-dom";

import "./video.css";

function Video({ data }) {
  const { poster, id } = data;
  return (
    <div className="video">
      <Link to={`/video/${id}`}>
        <img src={poster} width={150} height={150} alt="" />
        <div className="video-info">
          <div className="channel-img">
            <img src={poster} alt="" />
          </div>
          <div className="video-info-text">
            <h4>Gustavo Santaolalla - Babel - Otnicka Remix</h4>
            <p id="channel-name">{data.channelName ? data.channelName : ""}</p>
            <div className="data">
              <span>{309796} просмотров</span> <span id="dot"></span>{" "}
              <span id="video-data">3 недели назад</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
