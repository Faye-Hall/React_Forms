import React, { useState } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const add = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
    console.log(boxObj.id);
  };

  const boxComponents = boxes.map((box) => (
    <Box
      color={box.color}
      height={box.height}
      width={box.width}
      id={box.id}
      key={box.id}
    />
  ));
  return (
    <div>
      <BoxForm makeBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList;
