import { useRef, useEffect } from "react"
import { random } from './utils.js'

const useCanvas = (draw) => {

  const canvasRef = useRef()
  
  let x = Array(50).fill().map(() => random(125, 40))
  let y = Array(50).fill().map(() => random(125, 25))
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    let canvasRow
    let canvasNumber

    const render = () => {
      canvasRow = canvas.parentNode.getBoundingClientRect();
      canvas.width = canvasRow.width
      console.log(canvas.width)
      canvasNumber = Math.floor(canvasRow.width / 125)
      frameCount++
      draw(context, frameCount, x, y, canvasNumber)
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

