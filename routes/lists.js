import { Router } from 'express'
import * as listsCtrl from '../controllers/lists.js'

const router = Router()
// GET /lists
router.get('/', listsCtrl.index)

// GET /lists/new
router.get('/new', listsCtrl.new)


export {
  router
}