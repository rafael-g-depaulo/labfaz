import { MockResponse } from "./mockUtils"

export const expectStatus = (status: number, expect: jest.Expect, response: MockResponse) => {
  const statusCalledTimes = response.status.mock.calls.length
  expect(statusCalledTimes).toBeLessThanOrEqual(1)
  expect(statusCalledTimes).toBeGreaterThanOrEqual(0)
  if (statusCalledTimes === 1)
    expect(response.status).toBeCalledWith(status)
}

export default expectStatus
