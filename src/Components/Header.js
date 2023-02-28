import { useRef } from "react";

function ButtonComponent(props) {
  const myRef = useRef(null);

  function handleClick() {
    const targetElement = document.getElementById("aboutMe");
    const targetElementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetElementPosition, behavior: "smooth" });
  }

  return (
    <button onClick={props.onClick}>
      About
    </button>
  );
}

function Header(props) {
  return (
    <div className="Header">
      <div>
        <h1>Nurbol Ospanov</h1>
      </div>
      <div className='HeaderButtons'>
        <ButtonComponent onClick={props.onButtonClick} />
        <button>Experience</button>
        <button>Projects</button>
        <button>Contacts</button>
      </div>      
    </div>
  );
}
export default Header;
