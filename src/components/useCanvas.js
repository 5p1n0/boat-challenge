import { useRef, useEffect } from "react"

const useCanvas = (draw) => {

  const canvasRef = useRef()
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    let canvasTable
    
    const render = () => {
      
      // Canvas size setup
      canvasTable = canvas.parentNode.getBoundingClientRect();
      canvas.height = canvasTable.height
      canvas.width = canvasTable.width
      console.log(window.devicePixelRatio)
      draw(context, frameCount, canvas.width)
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

