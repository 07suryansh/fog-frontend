import leftarrow from "../assets/images/left-arrow.png";
import usflag from "../assets/images/united-states.png";

import ServerContainerBox from "./ServerContainerBox";
import "./server.css";
import.meta.env.VITE_API_URL;

export default function Server() {

  return (
    <div className="server">
      <div className="main-heading">
        <div className="small-head">
          <img src={leftarrow} alt="" /> MULTIPLAYER / SERVER BROWSER /
        </div>
        <div className="big-head">SERVER INFO</div>
      </div>

      <div className="server-data">
        <div className="server-head-one">! RC3-BASEMAPS</div>
        <div className="server-head-two">
          <img src={usflag} alt="" />
          CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ
        </div>
        <div className="server-head-three">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </div>
        <div className="button-group">
          <div className="btn">JOIN</div>
          <div className="btn">SPECTATE</div>
          <div className="btn">JOIN AS COMMANDER</div>
          <div className="btn" style={{width:"14vh"}}>★ 13672</div>
        </div>

        <ServerContainerBox/>


        
      </div>
    </div>
  );
}
