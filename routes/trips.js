import { Router } from 'express'
import tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth'

const router = Router()


// Public Routes


// Protected Routes
router.use(decodeUserFromToken)

export {
    router
}