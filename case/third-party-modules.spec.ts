import {test, vi, expect} from 'vitest'
import { doubleUserAge } from './third-party-modules'
import axios from 'axios'
vi.mock('axios')

test('第三模块的处理 axios', async () => {
  vi.mocked(axios).mockResolvedValue({name: 'lifa', age: 18})
  const r = await doubleUserAge()
  expect(r).toBe(36)
})