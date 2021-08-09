import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes


// Protected Routes
router.use(decodeUserFromToken)
router.get('/', tripsCtrl.index)
router.post('/', checkAuth, tripsCtrl.create)
router.put('/:id', checkAuth, tripsCtrl.update);
router.delete('/:id', checkAuth, tripsCtrl.delete);

export {
    router
}