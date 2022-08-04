import React from 'react'
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./account.css";

function Account() {
   return (
     <div className="account">
       <div className="account-icon">
         <BiVideoPlus />
       </div>
       <div className="account-icon">
         <IoIosNotificationsOutline />
       </div>
       <div className="account-icon">
         <img
           src="https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s176-c-k-c0x00ffffff-no-rj-mo"
           alt=""
           width={35}
           height={35}
         />
       </div>
     </div>
   );
}

export default Account;