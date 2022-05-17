import * as React from "react"
import "../styles/global.css"
import Iceberg from "../components/iceberg.js"


const IndexPage = () => {

  const draw = (context, frameCount, x, y, canvasNumber) => {

    let animationModifier = 4 * Math.sin(frameCount * 0.025)
    
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = '#d3cdc7'
    context.strokeStyle = 'white'
    context.lineWidth = '3'

    for ( 
      let i = 0, offset = i * 125;
      i < canvasNumber; 
      ++i, offset = i * 125
    ) 
    {
      context.beginPath()    
      i == 0 ? context.moveTo(25, 25) : context.moveTo(offset, 25)
      context.lineTo(x[i] * 0.6 + offset, y[i] * 0.4)
      context.lineTo(x[i] + offset, y[i] + animationModifier)
      context.lineTo(x[i] / 2 + offset + animationModifier, y[i] * 1.1)
      context.lineTo(x[i] * 0.1 + offset + animationModifier, y[i] + animationModifier)
      context.closePath()
      context.fill()
      context.stroke()
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
