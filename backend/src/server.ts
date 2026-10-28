import mongoose from 'mongoose'

import { app } from './app.js'
import { env } from './config/env.js'

const bootstrap = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI)
    app.listen(env.PORT, () => {
      console.log(`API running on port ${env.PORT}`)
    })
  } catch (error) {
    console.error('Failed to start backend', error)
    process.exit(1)
  }
}

void bootstrap()
