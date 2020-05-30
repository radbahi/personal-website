import React from "react";
import { Figure } from "react-bootstrap";

const Links = () => {
  return (
    <div className="links-div">
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>LinkedIn</Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>GitHub</Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>Medium</Figure.Caption>
      </Figure>
    </div>
  );
};

export default Links;
