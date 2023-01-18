import { Router } from 'express'
import * as listsCtrl from '../controllers/lists.js'

const router = Router()
// GET /lists
router.get('/', listsCtrl.index)

// GET /lists/new
router.get('/new', listsCtrl.new)

// GET /lists/:id
router.get('/:id', listsCtrl.show)

// GET /lists/:id/edit
router.get('/:id/edit', listsCtrl.edit)

// POST /lists
router.post('/', listsCtrl.create)

// DELETE /lists/:id
router.delete('/:id', listsCtrl.delete)

// PUT /lists/:id
router.put('/:id', listsCtrl.update)

export {
  router
}