import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
import { router as tripsRouter } from './routes/trips.js'
import { router as activitiesRouter } from './routes/activities.js'
import { router as checklistsRouter } from './routes/checklists.js'
import { router as inspirationsRouter } from './routes/inspiration.js'

import './config/database.js'

const app = express()

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/trips', tripsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/checklists', checklistsRouter)



app.get("/*", function (req, res) {
	res.sendFile(
		path.join(path.dirname(fileURLToPath(import.meta.url)), "build", "index.html")
	)
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
