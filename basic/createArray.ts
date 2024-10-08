import { randomNumberByLength } from './randomNumberByLength'

export function createArray(length: number, fillRandom: boolean = false, elementLength: number = 1): number[] {
  const arr: number[] = new Array(length).fill(0)
  if (fillRandom) {
    arr.forEach((_, index) => {
      arr[index] = randomNumberByLength(elementLength)
    })
  }

  return arr
}
