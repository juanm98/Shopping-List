import { Router } from 'express'
import * as listsCtrl from '../controllers/lists.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
// GET /lists
router.get('/',isLoggedIn, listsCtrl.index)

// GET /lists/new
router.get('/new',isLoggedIn, listsCtrl.new)

// GET /lists/:id
router.get('/:id',isLoggedIn, listsCtrl.show)

// GET /lists/:id/edit
router.get('/:id/edit',isLoggedIn, listsCtrl.edit)

// POST /lists
router.post('/',isLoggedIn, listsCtrl.create)

// POST /lists/:id/groceries
router.post('/:id/groceries',isLoggedIn, listsCtrl.createGrocery)

// DELETE /lists/:id
router.delete('/:id',isLoggedIn, listsCtrl.delete)

// DELETE /lists/:id/groceries
router.post('/:id/groceries/:groceryId',isLoggedIn, listsCtrl.deleteGrocery)

// PUT /lists/:id
router.put('/:id',isLoggedIn, listsCtrl.update)

export {
  router
}