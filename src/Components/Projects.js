import { JUMYSTAP, MEDIAasMEDIUM, TODOLIST } from "./Images";
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <div>
        <h1>Projects I’ve Worked On</h1>
      </div>
      <div className="ProjectsList">
        <div>
          <img className="Img1" src={JUMYSTAP} />
        </div>
        <div className="ProjectContent">
          <h2>JumysTap</h2>
          <p>
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </p>
          <div>
            <div className="Points">
              <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div className="Points">
              <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectsList">
        <div className="ProjectContent">
          <h2>Media as Medium</h2>
          <p>
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </p>
          <div>
            <div className="Points">
              <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div className="Points">
              <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
        <div>
          <img className="Img1" src={MEDIAasMEDIUM} />
        </div>
      </div>
      <div className="ProjectsList">
        <div>
          <img className="Img1" src={TODOLIST} />
        </div>
        <div className="ProjectContent">
          <h2>To-do list</h2>
          <p>
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </p>
          <div>
            <div className="Points">
              <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div className="Points">
              <div className="GrayCircle"></div>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
