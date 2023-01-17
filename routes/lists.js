import { Router } from 'express'

const router = Router()
// GET /lists
router.get('/', listsCtrl.index)


export {
  router
}