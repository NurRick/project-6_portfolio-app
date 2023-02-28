import { useRef } from "react";
import React from "react";

// function AboutButtonComponent(props) {
//   const myRef = useRef(null);
//   function handleClick() {
//     const targetElement = document.getElementById("aboutMe");
//     const targetElementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//     window.scrollTo({ top: targetElementPosition, behavior: "smooth" });
//   }

//     return (
//     <button onClick={props.onClick}>
//       About
//     </button>
//   );
// }

function ButtonComponent(props) {
  const scrollData = [
    { label: "About", id: "aboutMe" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contacts", id: "contacts" },
  ];

  return (
    <div className='HeaderButtons'>
      {scrollData.map((data) => (
        <button key={data.id} onClick={() => props.onClick(data.id)}>
          {data.label}
        </button>
      ))}
    </div>
  );
}

function Header(props) {
  return (
    <div className="Header">
      <div>
        <h1>Nurbol Ospanov</h1>
      </div>
      <div>
        <ButtonComponent onClick={props.onButtonClick} />
      </div>      
    </div>
  );
}
export default Header;
