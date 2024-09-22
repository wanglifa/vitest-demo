import {it, expect, describe, vi} from 'vitest'
import { tellAge, tellByFunction } from './use-object'
import { config } from './config'

describe('使用对象的形式', () => {
  it('属性', () => {
    config.allowTellAge = false
    const r = tellAge()
    expect(r).toBe('就不告诉你')
  })
  it('方法', () => {
    config.getAge = () => {
      return 2
    }
    const r = tellByFunction()
    expect(r).toBe('no')
  })
})