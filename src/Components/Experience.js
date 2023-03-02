import "./Experience.css";
import json from "./index.json";

function Experience() {
  return (
    <div className="Experience" id="experience">
      <div>
        <h1>Experience</h1>
      </div>
      <div className="ExperienceList">
        {json.data.experience.map((item, index) => (
          <div className="ExpList" key={index}>
            <div>
              <p>{item.year}</p>
            </div>
            <div className="ExperienceContent">
              <div className="HeadLine">
                <div className="OrangeCircle"></div>
                <h4>{item.position}</h4>
              </div>
              <div className="ExperiencePlace">
                <h5>{item.city}</h5>
              </div>
              <div className="ExperienceText">
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
