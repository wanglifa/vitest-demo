import {it, expect, describe, vi} from 'vitest'
import { tellName } from './user-variable'
vi.mock('./config', async (importOriginal) => {
  const config = await importOriginal()
  return {
    ...config as any,
    name: 'c'
  }
})
describe('使用变量的形式', () => {
  it('tell me', () => {
    const r = tellName()
    expect(r).toBe('c-heiheihei')
  })
})