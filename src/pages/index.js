import * as React from "react"
import "../styles/global.css"
import Iceberg from "../components/iceberg.js"


const IndexPage = () => {

  const draw = (context, frameCount, x, y, maxCanvasInRow, maxRows) => {

    let animationModifier = 4 * Math.sin(frameCount * 0.025)
    
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = '#d3cdc7'
    context.strokeStyle = 'white'
    context.lineWidth = '3'
    let index = 0;

    for (
      let r = 0, yOffset = 25;
      r < maxRows;
      ++r, yOffset = r * 125
    ) 
    {
      for (
        let c = 0, xOffset = 25;
        c < maxCanvasInRow;
        ++c, xOffset = c * 125, index++
      ) 
      {
        context.beginPath()
        context.moveTo(xOffset, yOffset)
        context.lineTo(x[index] * 0.6 + xOffset, y[index] * 0.4 + yOffset)
        context.lineTo(x[index] + xOffset, y[index] + yOffset + animationModifier)
        context.lineTo(x[index] / 2 + xOffset + animationModifier, y[index] * 1.1 + yOffset)
        context.lineTo(x[index] * 0.1 + xOffset + animationModifier, y[index] + yOffset + animationModifier)
        context.closePath()
        context.fill()
        context.stroke()
      }
    }

    

    

  }

  

  return (
    <main>
      <div>
        <Iceberg draw={draw} />
      </div>
    </main>
  )
}

export default IndexPage
