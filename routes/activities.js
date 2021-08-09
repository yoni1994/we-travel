import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes
router.post('/', activitiesCtrl.create)


// Protected Routes
router.use(decodeUserFromToken)

export {
    router
}