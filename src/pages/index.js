import * as React from "react"
import "../styles/global.css"
import Iceberg from "../components/iceberg"
import { getLeftIcebergs, getTopIcebergs, getRightIcebers, getBottomIcebergs, getMiddleIcebergs, getLowerBottomIcebergs } from "../components/icebergChunks"


const IndexPage = () => {

  const draw = (context, frameCount, width) => {

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = '#d3cdc7'
    context.strokeStyle = 'white'
    context.lineWidth = '3'

    getLeftIcebergs(context, width, frameCount)
    getTopIcebergs(context, width, frameCount)
    getMiddleIcebergs(context, width, frameCount)
    getRightIcebers(context, width, frameCount)
    getBottomIcebergs(context, width, frameCount)
    getLowerBottomIcebergs(context, width, frameCount)
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
