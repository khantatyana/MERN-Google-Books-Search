import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 5, textAlign: "center", backgroundImage: "url(/reading.png)"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
