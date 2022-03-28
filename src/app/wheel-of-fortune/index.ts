import { addIndex, map, range } from 'ramda'

interface ConicGradient {
  color: string
  start?: string
  end?: string
}

interface Wedge {
  label: string
  rotation: string
}

const gradientPosition = (total: number, index:number): string =>
  `${360/total * index}deg`

const wedgeRotation = (total: number, index: number): string =>
  `rotate(${((360 / total) * index) + ((360 / total) / 2)}deg)`

const toConicGradients = (
  total: number,
  colors: string[]
): ConicGradient[] =>
  range(0, total).map((index) => ({
    color: colors[index % colors.length],
    start: gradientPosition(total, index),
    end: gradientPosition(total, index + 1),
  }))

const toWedges = (labels: string[]): Wedge[] =>
  addIndex(map)((label, index) => ({
    label,
    rotation: wedgeRotation(labels.length, index)
  }))(labels)


export {
  toConicGradients,
  toWedges,
  Wedge,
}
