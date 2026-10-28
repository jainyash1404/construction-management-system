import request from 'supertest'

import { app } from './app.js'

type HealthResponse = {
  status: string
  service: string
}

describe('GET /api/v1/health', () => {
  it('returns health status', async () => {
    const response = await request(app).get('/api/v1/health')
    const body = response.body as HealthResponse

    expect(response.status).toBe(200)
    expect(body.status).toBe('ok')
    expect(body.service).toBe('backend')
  })
})
