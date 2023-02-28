import './AboutMe.css';
import { MyPhoto } from './Images';


function AboutMe() {
  
  return (
    <div className="AboutMe" id='aboutMe'>
      <div className="AboutMeText">
        <h1>About me</h1>
        <p>
          I’m software developer and this is my portfolio. I’m software
          developer and this is my portfolio. I’m software developer and this is
          my portfolio. I’m software developer and this is my portfolio.
        </p>
        <div className="AboutMeLINE">
          <div className="AboutMeL">
            <div className="AboutMeLine">
            <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div className="AboutMeLine">
            <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
          <div className="AboutMeL">
            <div className="AboutMeLine">
            <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div className="AboutMeLine">
            <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
      </div>
      <div className="MyPhoto">
        <img className="Photo" src={MyPhoto} />
      </div>
    </div>
  );
}
export default AboutMe;
