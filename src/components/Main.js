import React from "react";
import { Jumbotron } from "react-bootstrap";

const jumbotronStyle = {
  justifyContent: "center",
  padding: 10,
  backgroundSize: "cover",
  backgroundImage:
    "url(https://www.howardmodels.com/dpr/empire/Empire-State-Pano-Xlg.jpg)", // find a better image
  color: "white",
};

const Main = () => {
  return (
    <div className="focused-page">
      <Jumbotron style={jumbotronStyle}>
        <h1>Radouane Bahi</h1>
        <p>Come up with some funky tag-line for myself here.</p>
      </Jumbotron>
      <p>
        Hello! I am a freshly graduated software engineer from the Flatiron
        School. Work on this some more.
      </p>
    </div>
  );
};

export default Main;
