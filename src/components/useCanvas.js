import { useRef, useEffect } from "react"
import { random } from './utils.js'

const useCanvas = (draw) => {

  const canvasRef = useRef()
  
  // Random point coordinates
  let x = Array(50).fill().map(() => random(125, 40))
  let y = Array(50).fill().map(() => random(125, 25))
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    let canvasTable, maxCanvasInCol, maxCanvasInRow

    
    
    const render = () => {
      
      // Canvas size setup
      canvasTable = canvas.parentNode.getBoundingClientRect();
      canvas.height = canvasTable.height
      canvas.width = canvasTable.width
      
      // Max number of canvas in a row == Number of grid columns
      maxCanvasInRow = Math.floor(canvasTable.width / 125)
      // Max number of canvas in a column == Number of grid rows
      maxCanvasInCol = Math.floor(canvasTable.height / 125)

      frameCount++
      draw(context, frameCount, x, y, maxCanvasInRow, maxCanvasInCol)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas

