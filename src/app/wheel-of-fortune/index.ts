import shuffle from 'array-shuffle'
import { addIndex, map, range } from 'ramda'

interface Wedge {
  label: string
  rotation: number
  color: string
  start: number
  end: number
  center: number
}

const toDegrees = (total: number, index:number): number =>
  360/total * index

const toWedges = (
  labels: string[],
  colors: string[]
): Wedge[] =>
  addIndex(map)((label, index) => ({
    label,
    rotation: `rotate(${toDegrees(labels.length, index + 0.5)}deg`,
    color: colors[index % colors.length],
    start: toDegrees(labels.length, index),
    end: toDegrees(labels.length, index + 1),
    center: toDegrees(labels.length, index + 0.5),
  }))(labels)

const randomWedge = (wedges: Wedge[]) => new Promise(
  (resolve) => resolve(shuffle(wedges).shift())
)

export {
  Wedge,
  toWedges,
  randomWedge,
}
