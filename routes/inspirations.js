import { Router } from 'express'
import * as inspirationCtrl from '../controllers/inspirations.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

// Protected Routes
router.use(decodeUserFromToken)
router.get('/', checkAuth, inspirationCtrl.index)

export {
    router
}