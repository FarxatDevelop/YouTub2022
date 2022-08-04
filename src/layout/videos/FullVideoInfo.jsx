import React, { useState } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { BiCut } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";

import "./fullVideoInfo.css";

function FullVideoInfo() {
  let [like, setLike] = useState(true);
  let [Dislike, setDisLike] = useState(true);
  let likeChange = () => {
    setLike(false);
    setDisLike(true);
  };
  let dislikeChange = () => {
    setDisLike(false);
    setLike(true);
  };
  const share = () => {
    navigator.share({
      url: "https://www.youtube.com/embed/LH6tUi_Gp5s",
      text: "Sadraddin - ANT | Official M/V",
      title: "Sadraddin",
      files: "music.png",
    });
  };
  return (
    <div className="full-video-info">
      {/* <div className="full-info"> */}
      <div className="full-top">
        <p>#Shorts</p>
        <h5>Doston Ergashev - Meni sevma | Достон Эргашев - Мени севма</h5>
      </div>
      <div className="full-buttom">
        <div className="viewer">
          <h5>3 640 158 просмотров</h5>
        </div>
        <div className="reaction">
          <div className="reaction-icon" onClick={likeChange}>
            {like ? <AiOutlineLike /> : <AiFillLike />}
            <h5>1,8 ТЫС.</h5>
          </div>
          <div className="reaction-icon" onClick={dislikeChange}>
            {Dislike ? <AiOutlineDislike /> : <AiFillDislike />}
            <h5>НЕ НРАВИТСЯ</h5>
          </div>
          <div className="reaction-icon" onClick={share}>
            <FaShare />
            <h5>ПОДЕЛИТЬСЯ</h5>
          </div>
          <div className="reaction-icon">
            <BiCut />
            <h5>СОЗДАТЬ КЛИП</h5>
          </div>
          <div className="reaction-icon">
            <MdPlaylistAdd />
            <h5>СОХРАНИТЬ</h5>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default FullVideoInfo;
