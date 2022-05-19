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

    getLeftIcebergs(context, width)
    getTopIcebergs(context, width)
    getMiddleIcebergs(context, width)
    getRightIcebers(context, width)
    getBottomIcebergs(context, width)
    getLowerBottomIcebergs(context, width)
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
