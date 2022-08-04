import React from "react";
import { VideoData } from "../../data/data";
import Video from "./video";
import "./videos.css";

function Videos() {
  return (
    <div className="videos">
      <div className="full-videos">
        {VideoData.map((video, index) => (
          <Video data={video} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Videos;
