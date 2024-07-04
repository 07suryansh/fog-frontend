import './rightbar.css'
import m1 from '../assets/RightBar/image 1.png';
import m2 from '../assets/RightBar/image 2.png';
import m3 from '../assets/RightBar/join.png';
import i1 from '../assets/RightBar/online.png';
import i2 from '../assets/RightBar/offline.png';
import i3 from '../assets/RightBar/squad.png';

function Squad(props){
    return (
        <div className="invite_squad">
            <div className="squad_icon">
                <img src={props.icon} alt="" className="squad_icon_pic" />
                <div className="icon_name">{props.icon_name}</div>
            </div>
            <div className="squad_img">
                <img src={props.img} alt="" className="squad_img_pic" />
                <div className="img_name">
                    <div className="img_name_one">{props.img_name_one}</div>
                    <div className="img_name_two">{props.img_name_two}</div>
                </div>
            </div>
        </div>
    )
}

export default function Rightbar() {
  return (
    <div className="rightbar">
        <Squad
            icon={i3}
            icon_name="SQUAD"
            img={m3}
            img_name_one="Squad Join"
        />
        <Squad
            icon={i1}
            icon_name="ONLINE"
            img={m1}
            img_name_one="Mary Jones"
            img_name_two="Online"
        />
        <Squad
            icon={i2}
            icon_name="OFFLINE"
            img={m2}
            img_name_one="420"
            img_name_two="Offline"
        />
    </div>
  )
}
