import { getStrapiPort } from '@starter-project/server-conn-info'
import Middlewares from 'Middlewares'

describe('server', () =>{

  test('empty test', () => {
    if (typeof Middlewares === 'function') {
      expect(2).toBe(2)
    }
    expect(getStrapiPort() + 2).toBe(1339)
  })
})
