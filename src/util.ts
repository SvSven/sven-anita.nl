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
