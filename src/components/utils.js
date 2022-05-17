import * as React from 'react'

export const random = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min)
}
