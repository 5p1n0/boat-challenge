export const key = {
  rightPressed: false,
  leftPressed: false,
  upPressed: false,
  downPressed: false
}

export const movement = {
  xDelta: 0,
  yDelta: 0
}

export const random = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const responsiveValue = (width, value) => {
  return Math.round(width * (value / 650).toFixed(3))
}


