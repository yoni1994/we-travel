import { Router } from 'express'
import * as inspirationCtrl from '../controllers/inspirations.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes
router.get('/', inspirationCtrl.index)


// Protected Routes
// router.use(decodeUserFromToken)
// router.get('/:id', checkAuth, inspirationCtrl.show)
// router.post('/', checkAuth, inspirationCtrl.create)
// router.put('/:id', checkAuth, inspirationCtrl.update)
// router.delete('/:id', checkAuth, inspirationCtrl.delete)


export {
    router
}