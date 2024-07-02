import "./sidebar.css";
import b1 from "../assets/images/battlefield1.png";
import b2 from "../assets/images/battlefield hardline.png";
import b3 from '../assets/images/career.png';
import b4 from "../assets/images/battlefield4.png";
import b5 from "../assets/images/battlefield5.png";
import b6 from "../assets/images/watch.svg";
import b7 from "../assets/images/news.svg";
import p1 from "../assets/images/help.svg";
import p2 from "../assets/images/quit.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="battlefields">
        <img src={b5} alt="" className="sidebar-img" />
        <img src={b1} alt="" className="sidebar-img" />
        <img src={b4} alt="" className="sidebar-img" />
        <img src={b2} alt="" className="sidebar-img"/>  
        <img src={b3} alt="" className="sidebar-img"/>  
        <img src={b6} alt="" className="sidebar-img"/>  
        <img src={b7} alt="" className="sidebar-img"/>  
      </ul>
      <ul className="action-icon">
      <img src={p1} alt="" className="sidebar-icon" />
      <img src={p2} alt="" className="sidebar-icon" />
      </ul>
    </div>
  );
}
