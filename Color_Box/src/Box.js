import React from "react";

function Box({ color = "", height = "", width = "", Id = "" }) {
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: `${height}px`,
          width: `${width}px`,
        }}
      ></div>
    </>
  );
}
export default Box;
