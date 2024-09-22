import {it, expect, describe, vi} from 'vitest'
import { doubleUserAge } from './use-class'
import { User } from './UserClass'
vi.mock('./UserClass', () => {
  return {
    User: class User {
      age: number = 2
    }
  }
})
describe('使用 class 形式', () => {
 // it('属性', () => {
  //   const r = doubleUserAge()
  //   expect(r).toBe(4)
  // })
  it('方法', () => {
    User.prototype.getAge = () => {
      return 2
    }

    const r = doubleUserAge()
    expect(r).toBe(4)
  })
})