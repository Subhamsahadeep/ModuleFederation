import React from "react";

const Header = ({ name }) => {
  return (
    <header
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      APPLICATION HEADER :: {name} !!!
    </header>
  );
};

export default Header;
