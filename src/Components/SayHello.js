import { GITHUB, GMAIL, LINKEDIN, TELEGRAM } from "./Images";

function SayHello() {
  return (
    <div className="SayHello" id="contacts">
      <h1>Say Hello</h1>
      <p>
        I have a lot of passion to explore and learn new things and am looking
        forward to the opportunity.
      </p>
      <div className="SayHelloButtons">
        <button
          className="GetInTouch"
          onClick={() => {
            window.open("mailto:nmospanov@gmail.com", "_blank");
          }}
        >
          <img className="gmail" src={GMAIL} />
        </button>
        <button
          className="GetInTouch"
          onClick={() => {
            window.open("https://t.me/Nurbol_8_8_8", "_blank");
          }}
        >
          <img className="telega" src={TELEGRAM} />
        </button>
        <button
          className="GetInTouch"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/ospanovnurbol-2852821b9",
              "_blank"
            );
          }}
        >
          <img src={LINKEDIN} />
        </button>
        <button
          className="GetInTouch"
          onClick={() => {
            window.open(
              "https://github.com/NurRick",
              "_blank"
            );
          }}
        >
          <img src={GITHUB} />
        </button>
      </div>
    </div>
  );
}
export default SayHello;
