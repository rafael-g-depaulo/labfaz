import add from "."

describe('add lib', () =>{
  test('sample test', () => {
    const result: number = add(2, 1)
    expect(result).toBe(3)
  })
})
