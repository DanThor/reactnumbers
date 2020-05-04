import React from "react";
import "./view.css";

const View = props => (
  <section
    {...props}
    style={{
      maxWidth: "600px",
      margin: "0 auto",
      width: "100vw",
      height: "100vh",
    }}
  >
    {props.children}
  </section>
);

export default View;