import axios from "axios";
import { useState,useEffect } from "react";
import.meta.env.VITE_API_URL
import './ServerContainerBox.css'


export default function ServerContainerBox() {

    const api_url = import.meta.env.VITE_API_URL;

    const [players, setPlayers] = useState(null);
    const [ping, setPing] = useState(null);
    const [tickrate, setTickrate] = useState(null);
    const [settings, setSettings] = useState(null);
    const [advanced, setAdvanced] = useState(null);
    const [rules, setRules] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [playersRes, pingRes, tickrateRes, settingsRes, advancedRes, rulesRes] = await Promise.all([
            axios.get(`${api_url}/players`),
            axios.get(`${api_url}/ping`),
            axios.get(`${api_url}/tickrate`),
            axios.get(`${api_url}/settings`),
            axios.get(`${api_url}/advanced`),
            axios.get(`${api_url}/rules`)
          ]);
  
          setPlayers(playersRes.data);
          setPing(pingRes.data);
          setTickrate(tickrateRes.data);
          setSettings(settingsRes.data);
          setAdvanced(advancedRes.data);
          setRules(rulesRes.data);
  
          console.log('Players:', playersRes.data);
          console.log('Ping:', pingRes.data);
          console.log('Tickrate:', tickrateRes.data);
          console.log('Settings:', settingsRes.data);
          console.log('Advanced:', advancedRes.data);
          console.log('Rules:', rulesRes.data);
  
        } catch (err) {
          console.error('Error fetching data:', err);
          if (err.response) {
            console.error('Response data:', err.response.data);
            console.error('Response status:', err.response.status);
            console.error('Response headers:', err.response.headers);
          } else if (err.request) {
            console.error('Request data:', err.request);
          } else {
            console.error('Error message:', err.message);
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
                <div className="stats-data">{players[0].presentPlayer}/{players[0].totalPlayer}</div>
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

        </div>

    </div>
  )
}
