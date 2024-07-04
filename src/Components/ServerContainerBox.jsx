import axios from "axios";
import { useState, useEffect } from "react";
import.meta.env.VITE_API_URL;
import "./ServerContainerBox.css";
import BlockTile from "./BlockTile";
import Map from "./Map";
import m1 from "../assets/maps/m1.png";
import m2 from "../assets/maps/m2.png";
import m3 from "../assets/maps/m3.png";
import m4 from "../assets/maps/m4.png";

export default function ServerContainerBox() {
  const api_url = import.meta.env.VITE_API_URL;
  // console.log(api_url);
  const [players, setPlayers] = useState(null);
  const [ping, setPing] = useState(null);
  const [tickrate, setTickrate] = useState(null);
  const [settings, setSettings] = useState(null);
  const [advanced, setAdvanced] = useState(null);
  const [rules, setRules] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          playersRes,
          pingRes,
          tickrateRes,
          settingsRes,
          advancedRes,
          rulesRes,
        ] = await Promise.all([
          axios.get(`${api_url}/players`),
          axios.get(`${api_url}/ping`),
          axios.get(`${api_url}/tickrate`),
          axios.get(`${api_url}/settings`),
          axios.get(`${api_url}/advanced`),
          axios.get(`${api_url}/rules`),
        ]);

        setPlayers(playersRes.data);
        setPing(pingRes.data);
        setTickrate(tickrateRes.data);
        setSettings(settingsRes.data);
        setAdvanced(advancedRes.data);
        setRules(rulesRes.data);

        // console.log("Players:", playersRes.data);
        // console.log("Ping:", pingRes.data);
        // console.log("Tickrate:", tickrateRes.data);
        // console.log("Settings:", settingsRes.data);
        // console.log("Advanced:", advancedRes.data);
        // console.log("Rules:", rulesRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        } else if (err.request) {
          console.error("Request data:", err.request);
        } else {
          console.error("Error message:", err.message);
        }
      }
    };

    fetchData();
  }, [api_url]);

  if (!players || !ping || !tickrate || !settings || !advanced || !rules) {
    return <div>Loading...</div>;
  }

  return (
    <div className="server-container-box">
      <div className="server-stats">
        <div className="server-stats-box">
          <div className="stats-heading">PLAYERS</div>
          <div className="stats-data">
            {players[0].presentPlayer}/{players[0].totalPlayer}
          </div>
        </div>
        <div className="server-stats-box">
          <div className="stats-heading">PING</div>
          <div className="stats-data">{ping[0].value}ms</div>
        </div>
        <div className="server-stats-box">
          <div className="stats-heading">TICKRATE</div>
          <div className="stats-data">{tickrate[0].value} Hz</div>
        </div>
      </div>

      <div className="server-chart">
        <div className="server-block">
          <div className="block-heading">SETTINGS</div>
          {settings.map((data) => (
            <BlockTile
              key={data.id}
              tileName={data.name}
              tileValue={data.value}
            />
          ))}
        </div>
        <div className="server-block">
          <div className="block-heading">ADVANCED</div>
          {advanced.map((data) => (
            <BlockTile
              key={data.id}
              tileName={data.name}
              tileValue={data.value}
            />
          ))}
        </div>
        <div className="server-block">
          <div className="block-heading">RULES</div>
          {rules.map((data) => (
            <BlockTile
              key={data.id}
              tileName={data.name}
              tileValue={data.value}
            />
          ))}
        </div>
      </div>

      <div className="map-box">
        <div className="map-heading">MAP ROTATION</div>
        <div className="map-block">
          <Map
            img_url={m1}
            h_one="CONQUEST LARGE"
            h_two="DAWNBREAKER"
           />
          <Map
            img_url={m2}
            h_one="CONQUEST LARGE"
            h_two="PROPAGANDA"
           />
          <Map
            img_url={m3}
            h_one="CONQUEST LARGE"
            h_two="OPERATION LOCKER"
           />
          <Map
            img_url={m4}
            h_one="CONQUEST LARGE"
            h_two="LANCANG DAM"
           />
           <Map
            img_url={m1}
            h_one="CONQUEST LARGE"
            h_two="DAWNBREAKER"
           />
          <Map
            img_url={m2}
            h_one="CONQUEST LARGE"
            h_two="PROPAGANDA"
           />
          <Map
            img_url={m3}
            h_one="CONQUEST LARGE"
            h_two="OPERATION LOCKER"
           />
          <Map
            img_url={m4}
            h_one="CONQUEST LARGE"
            h_two="LANCANG DAM"
           />
           <Map
            img_url={m1}
            h_one="CONQUEST LARGE"
            h_two="DAWNBREAKER"
           />
          <Map
            img_url={m2}
            h_one="CONQUEST LARGE"
            h_two="PROPAGANDA"
           />
          <Map
            img_url={m3}
            h_one="CONQUEST LARGE"
            h_two="OPERATION LOCKER"
           />
          <Map
            img_url={m4}
            h_one="CONQUEST LARGE"
            h_two="LANCANG DAM"
           />
           <Map
            img_url={m1}
            h_one="CONQUEST LARGE"
            h_two="DAWNBREAKER"
           />
          <Map
            img_url={m2}
            h_one="CONQUEST LARGE"
            h_two="PROPAGANDA"
           />
          <Map
            img_url={m3}
            h_one="CONQUEST LARGE"
            h_two="OPERATION LOCKER"
           />
          <Map
            img_url={m4}
            h_one="CONQUEST LARGE"
            h_two="LANCANG DAM"
           />  
        </div>
      </div>

    </div>
  );
}
