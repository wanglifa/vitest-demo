import {it, expect, vi, afterEach} from 'vitest'
import { doubleUserAge } from './env'
afterEach(() => {
  vi.unstubAllEnvs()
})

it('process', () => {
  // process.env.USER_AGE = '2'
  vi.stubEnv('USER_AGE', '2')
  const r = doubleUserAge()
  expect(r).toBe(4)

})