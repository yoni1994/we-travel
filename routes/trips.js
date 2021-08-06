import { Router } from 'express'

import { decodeUserFromToken, checkAuth } from '../middleware/auth'

const router = Router()


// Public Routes


// Protected Routes
router.use(decodeUserFromToken)

export {
    router
}