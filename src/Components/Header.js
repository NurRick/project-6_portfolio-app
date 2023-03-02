import React from "react";

function ButtonComponent(props) {
  const scrollData = [
    { label: "Home", id: "Page1" },
    { label: "About", id: "aboutMe" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contacts", id: "contacts" },
  ];

  return (
    <div className="HeaderButtons">
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
    <header>
      <h1>
        Nurbol Ospanov
      </h1>
      <div>
        <ButtonComponent onClick={props.onButtonClick} />
      </div>
    </header>
  );
}
export default Header;
