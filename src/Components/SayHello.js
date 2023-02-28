import { GMAIL, LINKEDIN, TELEGRAM } from "./Images";

function SayHello() {
  
  return (
    <div className="SayHello" id='contacts'>
      <h1>Say Hello</h1>
      <p>I’m software developer and this is my portfolio.</p>
      <div className="SayHelloButtons">
        <button
          className="GetInTouch"
          onClick={() => {
            window.open("mailto:nmospanov@gmail.com", "_blank");
          }}
        >
          <p>Get in touch by</p>
          <img className="gmail" src={GMAIL} />
        </button>
        <button
          className="GetInTouch"
          onClick={() => {
            window.open("https://t.me/Nurbol_8_8_8", "_blank");
          }}
        >
          <p>Get in touch by</p>
          <img className="telega" src={TELEGRAM} />
        </button>
        <button
          className="GetInTouch"
          onClick={() => {
            window.open("https://www.linkedin.com/in/ospanovnurbol-2852821b9", "_blank");
          }}
        >
          <p>Get in touch by</p>
          <img  src={LINKEDIN} />
        </button>
      </div>
    </div>
  );
}
export default SayHello;
