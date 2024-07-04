import "./sidebar.css";
import b1 from "../assets/images/battlefield1.png";
import b2 from "../assets/images/battlefield hardline.png";
import b3 from "../assets/images/career.png";
import b4 from "../assets/images/battlefield4.png";
import b5 from "../assets/images/battlefield5.png";
import b6 from "../assets/images/watch.svg";
import b7 from "../assets/images/news.svg";
import p1 from "../assets/images/help.svg";
import p2 from "../assets/images/quit.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="battlefields">
        <NavLink to="/s" className="a">
          <img src={b5} alt="" className="sidebar-img" />
          <div className="pop">
            <div className="alert">BATTLEFIELD V</div>
          </div>
        </NavLink>
        <NavLink to="/s" className="a">
          <img src={b1} alt="" className="sidebar-img" />
          <div className="pop">
          <div className="alert">BATTLEFIELD 1</div>
          </div>
        </NavLink>
        <NavLink to="/" className="a">
          <img src={b4} alt="" className="sidebar-img" />
          <div className="pop">
          <div className="alert">BATTLEFIELD 4</div>
          </div>
        </NavLink>
        <NavLink to="/s" className="a">
          <img src={b2} alt="" className="sidebar-img" />
          <div className="pop">
          <div className="alert">BATTLEFIELD HARDLINE</div>
          </div>
        </NavLink>
        <NavLink to="/s" className="a">
          <img src={b3} alt="" className="sidebar-img" />
          <div className="pop">
          <div className="alert">CAREER</div>
          </div>
        </NavLink>
        <NavLink to="/s" className="a">
          <img src={b6} alt="" className="sidebar-img" />
          <div className="pop">
          <div className="alert">WATCH</div>
          </div>
        </NavLink>
        <NavLink to="/s" className="a">
          <img src={b7} alt="" className="sidebar-img" />
          <div className="pop">
          <div className="alert">NEWS</div>
          </div>
        </NavLink>
      </ul>
      <ul className="action-icon">
        <NavLink to="/s" className="a">
          <img src={p1} alt="" className="sidebar-icon" />
          <div className="pop">
          <div className="alert">HELP</div>
          </div>
        </NavLink>
        <NavLink to="/s" className="a">
          <img src={p2} alt="" className="sidebar-icon" />
          <div className="pop">
          <div className="alert">QUIT</div>
          </div>
        </NavLink>
      </ul>
    </div>
  );
}
