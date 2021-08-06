import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes
router.post('/', tripsCtrl.create)

// Protected Routes
router.use(decodeUserFromToken)

export {
    router
}