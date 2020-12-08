import { add } from '@starter-project/adder'
import Middlewares from 'Middlewares'

describe('server', () =>{

  test('empty test', () => {
    const three: number = 3
    if (typeof Middlewares === 'function') {
      expect(2).toBe(2)
    }
    expect(add(2, 1)).toBe(three)
  })
})
