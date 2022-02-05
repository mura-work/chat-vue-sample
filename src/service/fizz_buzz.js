export function fizzBuzz() {
  [...Array(100).keys()].forEach((i) => {
    calcFizzBuzz(i)
  })
}

export function calcFizzBuzz(num) {
  if (fizz(num) && buzz(num)) return 'fizz_buzz'
  if (buzz(num)) return 'buzz'
  if (fizz(num)) return 'fizz'
}

function buzz(i) {
  return i % 5 === 0
}

function fizz(i) {
  return i % 3 === 0
}