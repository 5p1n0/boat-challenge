export const random = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const responsiveValue = (width, value) => {
  return Math.round(width * (value / 650).toFixed(3))
}

