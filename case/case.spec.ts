import { doubleUserAge, fetchDoubleUserAge } from ".";
import {vi, it, expect, describe, beforeEach} from 'vitest'
import { userAge } from "./user";
vi.mock('./user', () => {
  return {
    fetchUserAge: () => Promise.resolve(2)
  }
})
describe('间接input', () => {
  beforeEach(() => {

    vi.doMock('./user', () => {
      return {
        userAge: () => 2
      }
    })
  })
  it('first', async () => {
    const r = await fetchDoubleUserAge()
    expect(r).toBe(4)
  })
  it('second', () => {
    // console.log(userAge()) // oldValue
  })
})