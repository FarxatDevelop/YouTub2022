import React from "react";
import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import {
  MdVideoLibrary,
  MdOutlineSubscriptions,
  MdOutlineOndemandVideo,
} from "react-icons/md";

import "./aside.css";

function Aside() {
  return (
    <aside className="aside">
      <div className="aside-menu">
        <AiFillHome />
        <p>Главная</p>
      </div>
      <div className="aside-menu">
        <AiOutlineCompass />
        <p>Навигатор</p>
      </div>
      <div className="aside-menu">
         <MdOutlineOndemandVideo />
        <p>Shorts</p>
      </div>
      <div className="aside-menu">
        <MdOutlineSubscriptions />
        <p>Подписки</p>
      </div>
      <div className="aside-menu">
        <MdVideoLibrary />
        <p>Библиотека</p>
      </div>
    </aside>
  );
}

export default Aside;
