import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import "./search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Введите запрос" />
      <div className="search-btns">
        <div className="search-btn">
          <BsSearch />
        </div>
        <div className="voice-btn">
          <MdKeyboardVoice />
        </div>
      </div>
    </div>
  );
}

export default Search;
