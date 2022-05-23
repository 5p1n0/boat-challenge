import React from "react"
import useCanvas from "./useCanvas.js"

const Canvas = (prop) => {

  const {draw} = prop
  const canvasRef = useCanvas(draw)

  return (
    <canvas ref={canvasRef} />
  );
};

export default Canvas
