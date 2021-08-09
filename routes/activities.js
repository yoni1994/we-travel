import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes


// Protected Routes
router.use(decodeUserFromToken)
router.post('/', checkAuth, activitiesCtrl.create)

export {
    router
}