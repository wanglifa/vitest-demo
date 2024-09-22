import {vi, it, expect, describe} from 'vitest'
import { doubleHeight, doubleUserAge } from './global'

describe('global', () => {
  it('double user age', () => {
    vi.stubGlobal('lifa', {age: 18})

    const r = doubleUserAge()

    expect(r).toBe(36)
  })
  it('double inner height', () => {
    vi.stubGlobal('innerHeight', 100)
    const r = doubleHeight()
    expect(r).toBe(200)
  })
})