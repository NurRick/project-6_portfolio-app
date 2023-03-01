import "./AboutMe.css";
import { MyPhoto } from "./Images";
import json from "./JsonComponent/index.json";

function AboutMe() {
  return (
    <div className="AboutMe" id="aboutMe">
      <div className="AboutMeText">
        <h1>About me</h1>
        <p>{json.data.aboutMeSummary}</p>
        <div className="AboutMeLINE">
          {json.data.aboutMe.map((item, index) => (
            <div className="AboutMeLine" key={index}>
              <div className="GrayCircle"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="MyPhoto">
        <img className="Photo" src={MyPhoto} />
      </div>
    </div>
  );
}
export default AboutMe;
