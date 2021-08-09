import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes


// Protected Routes
router.use(decodeUserFromToken)
router.get('/', checkAuth, activitiesCtrl.index)
router.get('/:id', checkAuth, activitiesCtrl.show)
router.post('/', checkAuth, activitiesCtrl.create)
router.put('/:id', checkAuth, activitiesCtrl.update)
router.delete('/:id', checkAuth, activitiesCtrl.delete);


export {
    router
}