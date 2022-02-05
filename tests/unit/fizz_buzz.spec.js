// import { mount } from '@vue/test-utils';
import { calcFizzBuzz } from '../../src/service/fizz_buzz';


describe('confirm calculation fizz_buzz', () => {
  it ('calc fizz_buzz', () => {
    expect(calcFizzBuzz(1)).toBe()
    expect(calcFizzBuzz(3)).toBe('fizz')
    expect(calcFizzBuzz(5)).toBe('buzz')
    expect(calcFizzBuzz(15)).toBe('fizz_buzz')
  })
})