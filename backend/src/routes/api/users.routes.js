import { Router } from 'express'
import * as userControllers from '../../controllers/users.controllers.js'

const router = Router()

router.get('/', userControllers.getAllUsers)
router.get('/:id', userControllers.getOneUser)
router.post('/', userControllers.createUser)
router.put('/:id', userControllers.updateUser)
router.delete('/:id', userControllers.deleteUser)

export default router