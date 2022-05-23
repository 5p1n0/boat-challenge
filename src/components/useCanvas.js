import { useRef, useEffect } from "react"
import { key, movement } from "./utils"

const useCanvas = (draw) => {

  const canvasRef = useRef()

  const keyDownHandler = (e) => {
    switch(e.keyCode) {
      case 65:
        key.leftPressed = true
        break
      case 68:
        key.rightPressed = true
        break
      case 87:
        key.upPressed = true
        break
      case 83:
        key.downPressed = true
        break
      default:
        break
    }
  }

  const keyUpHandler = (e) => {
    switch (e.keyCode) {
      case 65:
        key.leftPressed = false
        break
      case 68:
        key.rightPressed = false
        break
      case 87:
        key.upPressed = false
        break
      case 83:
        key.downPressed = false
        break
      default:
        break
    }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    let dpi = window.devicePixelRatio
    let frameCount = 0
    let animationFrameId
    let canvasTable

    window.addEventListener('keydown', keyDownHandler)
    window.addEventListener('keyup', keyUpHandler)
    
    const render = () => {
      
      // Canvas size setup
      canvasTable = canvas.parentNode.getBoundingClientRect();
      
      canvas.height = canvasTable.height * dpi
      canvas.width = canvasTable.width * dpi
      frameCount++

      if (key.rightPressed) movement.xDelta += 7
      if (key.leftPressed) movement.xDelta -= 7
      if (key.upPressed) movement.yDelta -= 7
      if (key.downPressed) movement.yDelta += 7

      draw(context, frameCount, canvas.width, canvas.height)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('keydown', keyDownHandler)
      window.removeEventListener('keyup', keyUpHandler)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas

