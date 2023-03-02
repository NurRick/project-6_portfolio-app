import "../App.css";

function Page1() {
  return (
    <div id="Page1" className="Page1">
      <h1>
        Hi, I’m Nurbol Ospanov,
        <br /> I build things for the web.
      </h1>
      <p>I’m software developer and this is my portfolio.</p>
      <button
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1dkJ9HZh7X9Hio-LNVRoc0IzMtQths7SZ/view?usp=sharing",
            "_blank"
          );
        }}
      >
        Check out my CV
      </button>
    </div>
  );
}
export default Page1;
