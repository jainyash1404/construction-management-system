import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { healthRouter } from './routes/health.route.js'

export const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    name: 'construction-management-system-api',
    status: 'ok'
  })
})

app.use('/api/v1/health', healthRouter)
