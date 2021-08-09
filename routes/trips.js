import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes
router.get('/', tripsCtrl.index)


// Protected Routes
router.use(decodeUserFromToken)
router.post('/', checkAuth, tripsCtrl.create)

export {
    router
}