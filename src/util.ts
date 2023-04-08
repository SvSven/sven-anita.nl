import imgLoevestein from './assets/loevestein.jpg'
import imgBergen from './assets/bergen.jpg'

export const getBackgroundImage = (path: string): string => {
  switch (path) {
    case '/':
      return imgLoevestein
    case '/emma':
      return imgBergen
    default:
      return imgLoevestein
  }
}

export const paddDuration = (value: number): string => (value < 10 ? `0${value}` : `${value}`)

export const roundDuration = (value: number): number => parseFloat(value.toFixed(1))
