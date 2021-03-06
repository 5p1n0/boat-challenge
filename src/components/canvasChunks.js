import { responsiveValue, movement } from "./utils"


export const drawLeftChunk = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(responsiveValue(width, 10) + animationDelta * 2, 0)
  context.lineTo(responsiveValue(width, 35) + animationDelta * 1, 40 + animationDelta * 2)
  context.lineTo(0, 50 + animationDelta * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(0, 95)
  context.lineTo(responsiveValue(width, 10) + animationDeltaMod * 2, 0 + 95)
  context.lineTo(responsiveValue(width, 40) + animationDeltaMod * 1, 45 + 95 + animationDeltaMod * 4)
  context.lineTo(0, 50 + 95 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(0, 210)
  context.lineTo(responsiveValue(width, 50) + animationDelta * 2, 30 + 210 + animationDelta * 1)
  context.lineTo(0, 55 + 210 + animationDelta * 1)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(0, 275 + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 30) + animationDeltaMod * 2, 25 + 275 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 10) + animationDeltaMod * 2, 65 + 275 + animationDeltaMod * 4)
  context.lineTo(0, 65 + 275 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(0, 380 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 10) + animationDelta * 4, 10 + 380)
  context.lineTo(0, 20 + 380 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(0, 420 + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 120) + animationDeltaMod * 1, 10 + 420)
  context.lineTo(responsiveValue(width, 110) + animationDeltaMod * 2, 35 + 420)
  context.lineTo(responsiveValue(width, 125) + animationDeltaMod * 2, 40 + 420)
  context.lineTo(responsiveValue(width, 100) + animationDeltaMod * 2, 95 + 420)
  context.lineTo(0, 110 + 420)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 40) + animationDelta * 2, 540 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 40 + 40) + animationDelta * 4, 540 - 10 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 10 + 40) + animationDelta * 1, 5 + 540 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 15 + 40) + animationDelta * 2, 20 + 540 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 7 + 40) + animationDelta * 1, 25 + 540 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 40) + animationDelta * 2, 20 + 540 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 7 + 40) + animationDelta * 1, 15 + 540 + animationDelta * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(0, 600 + animationDeltaMod * 4)
  context.lineTo(responsiveValue(width, 40) + animationDeltaMod * 2, 10 + 610 + animationDeltaMod * 4)
  context.lineTo(responsiveValue(width, 45) + animationDeltaMod * 1, 30 + 610 + animationDeltaMod * 3)
  context.lineTo(0, 50 + 610 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

}

export const drawTopChunk = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.beginPath()
  context.moveTo(responsiveValue(width, 60) + animationDeltaMod * 2, 0)
  context.lineTo(responsiveValue(width, 50 + 60) + animationDeltaMod * 2, 0)
  context.lineTo(responsiveValue(width, 52 + 60) + animationDeltaMod * 2, 95 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 60 - 10) + animationDeltaMod * 2, 95 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 60 - 15) + animationDeltaMod * 1, 85 + animationDeltaMod * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 140) + animationDelta * 2, 0)
  context.lineTo(responsiveValue(width, 40 + 140) + animationDelta * 2, 0)
  context.lineTo(responsiveValue(width, 20 + 140) + animationDelta * 2, 20)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 135) + animationDeltaMod * 1, 18 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 35 + 135) + animationDeltaMod * 2, 25 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 30 + 135) + animationDeltaMod * 1, 45 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 135) + animationDeltaMod * 2, 75 + animationDeltaMod * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 200) + animationDelta * 2, 0)
  context.lineTo(responsiveValue(width, 35 + 200) + animationDelta * 4, 25 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 200 - 65) + animationDelta * 1, 140 + animationDelta * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 265) + animationDeltaMod * 1, 0)
  context.lineTo(responsiveValue(width, 35 + 265) + animationDeltaMod * 1, 0)
  context.lineTo(responsiveValue(width, 265 - 5) + animationDeltaMod * 1, 20 + animationDeltaMod * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 320) + animationDelta * 1, 0)
  context.lineTo(responsiveValue(width, 75 + 320) + animationDelta * 1, 0)
  context.lineTo(responsiveValue(width, 80 + 320) + animationDelta * 2, 25 + animationDelta * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 410) + animationDeltaMod * 2, 0)
  context.lineTo(responsiveValue(width, 15 + 410) + animationDeltaMod * 1, 0)
  context.lineTo(responsiveValue(width, 5 + 410) + animationDeltaMod * 1, 25 + animationDeltaMod * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 440) + animationDelta * 1, 0)
  context.lineTo(responsiveValue(width, 20 + 440) + animationDelta * 1, 0)
  context.lineTo(responsiveValue(width, 30 + 440) + animationDelta * 1, 20 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 20 + 440) + animationDelta * 1, 55 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 10 + 440) + animationDelta * 1, 55 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 5 + 440) + animationDelta * 1, 45 + animationDelta * 1)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 470) + animationDeltaMod * 2, 0)
  context.lineTo(responsiveValue(width, 10 + 470) + animationDeltaMod * 3, 0)
  context.lineTo(responsiveValue(width, 5 + 470) + animationDeltaMod * 1, 10 + animationDeltaMod * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 500) + animationDelta * 1, 0)
  context.lineTo(responsiveValue(width, 130 + 500) + animationDelta * 1, 0)
  context.lineTo(responsiveValue(width, 140 + 500) + animationDelta * 1, 75 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 140 + 500) + animationDelta * 1, 85 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 140 + 500) + animationDelta * 1, 85 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 75 + 500) + animationDelta * 1, 180 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 500 - 30) + animationDelta * 2, 140 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 500 - 30) + animationDelta * 2, 55 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

}

export const drawMiddleChunk = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.beginPath()
  context.moveTo(responsiveValue(width, 265) + animationDeltaMod * 2, 50 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 265 + 160) + animationDeltaMod * 2, 50 + 30 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 265 + 140) + animationDeltaMod * 2, 50 + 80 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 265 + 10) + animationDeltaMod * 2, 50 + 120 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 265 - 40) + animationDeltaMod * 2, 50 + 100 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 265 - 45) + animationDeltaMod * 2, 50 + 90 + animationDeltaMod * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 410) + animationDelta * 3, 150 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 410 + 5) + animationDelta * 3, 150 - 5 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 410 + 30) + animationDelta * 3, 150 - 10 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 410 + 55) + animationDelta * 3, 150 + 20 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 410 + 30) + animationDelta * 3, 150 + 40 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 410 + 20) + animationDelta * 3, 150 + 40 + animationDelta * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 240) + animationDelta * 2, 190 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 240 + 90) + animationDelta * 2, 190 + 40 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 240 + 50) + animationDelta * 3, 190 + 60 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 240 + 110) + animationDelta * 2, 190 + 54 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 240 + 140) + animationDelta * 3, 190 + 80 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 240 + 160) + animationDelta * 4, 190 + 110 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 240 + 110) + animationDelta * 1, 190 + 160 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 240 - 30) + animationDelta * 4, 190 + 100 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 240 - 20) + animationDelta * 2, 190 + 94 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 240 - 30) + animationDelta * 2, 190 + 80 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 240 - 34) + animationDelta * 2, 190 + 60 + animationDelta * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 100) + animationDeltaMod * 2, 180 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 100 + 80) + animationDeltaMod * 3, 180 + 60 + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 100 + 30) + animationDeltaMod * 2, 180 + 200 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 100 - 60) + animationDeltaMod * 3, 180 + 180 + animationDeltaMod * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 180) + animationDelta * 1, 340 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 180 + 80) + animationDelta * 3, 340 - 10 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 180 + 100) + animationDelta * 2, 340 + 30 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 180 + 80) + animationDelta * 2, 340 + 50 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 180) + animationDelta * 2, 340 + 45 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

}

export const drawRightChunk = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.beginPath()
  context.moveTo(responsiveValue(width, 625), 155 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 625 - 10) + animationDelta * 2, 165 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 625 - 25) + animationDelta * 2, 185 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 625 - 15) + animationDelta * 2, 195 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 625) + animationDelta * 2, 195 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 650), 230 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 650 - 10) + animationDeltaMod * 1, 230 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 650 - 12) + animationDeltaMod * 1, 220 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 650 - 25) + animationDeltaMod * 1, 215 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 650 - 40) + animationDeltaMod * 1, 220 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 650 - 25) + animationDeltaMod * 1, 245 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 650 - 12) + animationDeltaMod * 1, 245 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 600) + animationDelta * 1, 210 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 600 - 25) + animationDelta * 2, 245 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 600) + animationDelta * 2, 245 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 600 + 10) + animationDelta * 2, 265 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 600 + 15) + animationDelta * 2, 255 + animationDelta * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 650), 285 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 650 - 105) + animationDeltaMod * 3, 280 + animationDeltaMod * 4)
  context.lineTo(responsiveValue(width, 650 - 115) + animationDeltaMod * 2, 350 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 650), 330 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()
}

export const drawBottomChunk = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.beginPath()
  context.moveTo(responsiveValue(width, 130) + animationDeltaMod * 2, 500 + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 130 + 40) + animationDeltaMod * 3, 500 + 35 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 130 + 30) + animationDeltaMod * 1, 500 + 55 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 130 - 50) + animationDeltaMod * 2, 500 + 75 + animationDeltaMod * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 160) + animationDelta * 2, 500 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 160 + 20) + animationDelta * 2, 500 - 10 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 160 + 30) + animationDelta * 1, 500 + 5 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 160 + 20) + animationDelta * 2, 500 + 10 + animationDelta * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 140) + animationDeltaMod * 2, 480 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 140 + 60) + animationDeltaMod * 4, 480 - 50 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 140 + 50) + animationDeltaMod * 2, 470 + animationDeltaMod * 3)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 215) + animationDelta * 2, 440 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 215 + 30) + animationDelta * 1, 440 - 10 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 215 + 60) + animationDelta * 2, 440 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 215 + 45) + animationDelta * 3, 440 + 30 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 215 + 5) + animationDelta * 2, 440 + 30 + animationDelta * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 300) + animationDeltaMod * 1, 470 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 300 + 2) + animationDeltaMod * 2, 470 + 5 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 300 + 10) + animationDeltaMod * 3, 470 + 10 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 300 + 100) + animationDeltaMod * 1, 470 - 5 + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 300 + 130) + animationDeltaMod * 2, 470 - 70 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 300 + 122) + animationDeltaMod * 1, 470 - 85 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 300 + 80) + animationDeltaMod * 1, 470 - 87 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 300 + 30) + animationDeltaMod * 1, 470 - 50 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 425) + animationDelta * 2, 485 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 425 + 5) + animationDelta * 1, 485 + 15 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 425 + 20) + animationDelta * 1, 485 + 15 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 425 + 55) + animationDelta * 1, 485 - 100 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 425 + 70) + animationDelta * 4, 485 - 98 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 425 + 80) + animationDelta * 2, 485 - 115 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 425 + 50) + animationDelta * 2, 485 - 118 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 425) + animationDelta * 4, 485 - 50 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 500) + animationDeltaMod * 2, 350 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 500 + 10) + animationDeltaMod * 1, 350 - 10 + animationDeltaMod * 4)
  context.lineTo(responsiveValue(width, 500 + 20) + animationDeltaMod * 2, 350 - 80 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 500 - 25) + animationDeltaMod * 3, 350 - 100 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 500 - 80) + animationDeltaMod * 2, 350 - 70 + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 500 - 82) + animationDeltaMod * 3, 350 - 30 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

}

export const drawLowerBottomChunk = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.beginPath()
  context.moveTo(responsiveValue(width, 110) + animationDeltaMod * 3, 1050 - 30 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 110 - 60) + animationDeltaMod * 2, 1050 - 20 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 110) + animationDeltaMod * 2, 1050 - 10 + animationDeltaMod * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 130) + animationDelta * 2, 1050 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 130 + 150) + animationDelta * 2, 1050 - 100 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 130 + 170) + animationDelta * 2, 1050 - 70 + animationDelta * 4)
  context.lineTo(responsiveValue(width, 130 + 190) + animationDelta * 2, 1050 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 330) + animationDeltaMod * 2, 1050 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 330 - 30) + animationDeltaMod * 3, 1050 - 100 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 330) + animationDeltaMod * 3, 1050 - 110 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 330 + 40) + animationDeltaMod * 2, 1050 - 140 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 330 + 80) + animationDeltaMod * 1, 1050 - 120 + animationDeltaMod * 4)
  context.lineTo(responsiveValue(width, 330 + 90) + animationDeltaMod * 2, 1050 - 80 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 330 + 30) + animationDeltaMod * 2, 1050 + animationDeltaMod * 4)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 440) + animationDelta * 2, 1050 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 440 - 30) + animationDelta * 2, 1050 - 180 + animationDelta * 3)
  context.lineTo(responsiveValue(width, 440 + 40) + animationDelta * 4, 1050 - 230 + animationDelta * 1)
  context.lineTo(responsiveValue(width, 440 + 100) + animationDelta * 1, 1050 - 200 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 440 + 130) + animationDelta * 2, 1050 - 220 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 650) + animationDelta * 3, 1050 - 210 + animationDelta * 2)
  context.lineTo(responsiveValue(width, 650) + animationDelta * 2, 1050 + animationDelta * 2)
  context.closePath()
  context.fill()
  context.stroke()

  context.beginPath()
  context.moveTo(responsiveValue(width, 650), 1050 - 250 + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 650 - 30) + animationDeltaMod * 1, 1050 - 246 + animationDeltaMod * 3)
  context.lineTo(responsiveValue(width, 650), 1050 - 225 + animationDeltaMod * 2)
  context.closePath()
  context.fill()
  context.stroke()
}

export const drawBoat = (context, width, frameCount) => {

  let animationDelta = Math.sin(frameCount * 0.025)
  let animationDeltaMod = Math.cos(frameCount * 0.025)

  context.fillStyle = '#7f303c'
  
  context.beginPath()
  context.moveTo(responsiveValue(width, 55) + movement.xDelta, 750 + movement.yDelta + animationDeltaMod * 2)
  context.lineTo(responsiveValue(width, 86) + movement.xDelta, 800 + movement.yDelta + animationDeltaMod * 1)
  context.lineTo(responsiveValue(width, 55) + movement.xDelta, 800 + movement.yDelta + animationDeltaMod * 3)
  context.closePath()
  context.fill()

  context.beginPath()
  context.moveTo(responsiveValue(width, 48) + movement.xDelta, 770 + movement.yDelta + animationDelta * 1)
  context.lineTo(responsiveValue(width, 26) + movement.xDelta, 800 + movement.yDelta + animationDelta * 3)
  context.lineTo(responsiveValue(width, 48) + movement.xDelta, 800 + movement.yDelta + animationDelta * 1)
  context.closePath()
  context.fill()

  context.fillStyle = 'white'
  context.strokeStyle= '#d3cdc7'

  context.beginPath()
  context.moveTo(responsiveValue(width, 15) + movement.xDelta, 810 + movement.yDelta)
  context.lineTo(responsiveValue(width, 95) + movement.xDelta, 810 + movement.yDelta)
  context.lineTo(responsiveValue(width, 86) + movement.xDelta, 825 + movement.yDelta)
  context.lineTo(responsiveValue(width, 25) + movement.xDelta, 825 + movement.yDelta)
  context.closePath()
  context.fill()
  context.stroke()

}