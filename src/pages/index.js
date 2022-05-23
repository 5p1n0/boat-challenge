import * as React from "react"
import "../styles/global.css"
import Canvas from "../components/canvas"
import { drawLeftChunk, drawTopChunk, drawMiddleChunk, drawRightChunk, drawBottomChunk, drawLowerBottomChunk, drawBoat } from "../components/canvasChunks"

const IndexPage = () => {

  const draw = (context, frameCount, width, height) => {

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = '#d3cdc7'
    context.strokeStyle = 'white'
    context.lineWidth = '3'

    drawLeftChunk(context, width, height, frameCount)
    drawTopChunk(context, width, height, frameCount)
    drawMiddleChunk(context, width, frameCount)
    drawRightChunk(context, width, frameCount)
    drawBottomChunk(context, width, frameCount)
    drawLowerBottomChunk(context, width, frameCount)
    drawBoat(context, width, frameCount)

  }

  return (
    <main>
      <div>
        <h1>Frontend Development Challenge</h1>
        <h2>Image #3</h2>
        <p>Boat can be controlled with <span>WASD</span> keys</p>
      </div>
      <div>
        <Canvas draw={draw} />
      </div>
    </main>
  )
}

export default IndexPage
