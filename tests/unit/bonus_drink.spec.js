import { bonusDrink } from '../../src/service/bonus_drink'

describe('bonus drink', () => {
  it ('空き瓶3本で1本プレゼントされるとき合計何本飲めるか', () => {
    expect(bonusDrink(0)).toEqual(0)
    expect(bonusDrink(1)).toEqual(1)
    expect(bonusDrink(3)).toEqual(4)
    expect(bonusDrink(10)).toEqual(14)
    expect(bonusDrink(11)).toEqual(16)
    expect(bonusDrink(50)).toEqual(74)
    expect(bonusDrink(100)).toEqual(149)
  })
})