import { Router } from 'express'
import tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth'

const router = Router()


// Public Routes
router.post('/', tripsCtrl.create)

// Protected Routes
router.use(decodeUserFromToken)

export {
    router
}