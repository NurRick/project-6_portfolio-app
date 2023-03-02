import "./Projects.css";
import json from "./index.json";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h1>Projects I've Worked On</h1>
      {json.data.projects.map((item, index) => (
        <div className="ProjectsList" key={index} style={{
          flexDirection: index % 2 === 1 ? "row-reverse" : "row",
        }}>
          <div className="ProjectContent">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div>
              <div className="Points">
                <div className="GrayCircle"></div>
                <a
                  className="Inter-500"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.linkName}
                </a>
              </div>
              <div className="Points">
                <div className="GrayCircle"></div>
                <p>{item.bullet}</p>
              </div>
            </div>
          </div>
          <div>
            <img className="Img1" src={require(`${item.picture}`)} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projects;
