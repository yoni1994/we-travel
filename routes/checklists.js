import { Router } from 'express'
import * as checklistsCtrl from '../controllers/checklists.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes


// Protected Routes
router.use(decodeUserFromToken)
router.get('/', checkAuth, checklistsCtrl.index)
router.post('/', checkAuth, checklistsCtrl.create)



export {
    router
}