import React from "react";
import { useParams } from "react-router-dom";
import { VideoData } from "../../data/data";
import MiniVideos from "./MiniVideos";

import FullVideoInfo from "./FullVideoInfo";
import "./fullVideo.css";

function FullVideo() {
  const { id } = useParams();
  const posterImg = VideoData[id - 1];
  return (
    <div className="FullVideo">
      <div className="FullVideo-container">
        <div className="FullVideo-body">
          <div className="FullVideo-left">
            <div className="video">
              <iframe
                width="956"
                height="540"
                src={`https://www.youtube.com/embed/${posterImg.miniUrl}`}
                title="Ozodbek Nazarbekov | Akmalxo'ja Xolxodjayev-Kimlar (Cover)"
                frameborder="5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <FullVideoInfo />
          </div>
          <div className="FullVideo-right">
            <MiniVideos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullVideo;
