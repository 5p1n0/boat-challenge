import React from "react"
import useCanvas from "./useCanvas.js"

const Iceberg = (props) => {

  const {draw, ...rest} = props
  const canvasRef = useCanvas(draw)

  return (
    <canvas ref={canvasRef} />
  );
};

export default Iceberg;
