import { VideoData } from "../../data/data";
import MiniVideo from "./MiniVideo";

import "./MiniVideos.css"

function MiniVideos() {
  return (
    <div className="mini-videos">
      {VideoData.map((item) => (
        <MiniVideo data={item} />
      ))}
    </div>
  );
}

export default MiniVideos;
