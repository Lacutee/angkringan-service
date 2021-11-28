const express = require('express');
const router = express.Router();

const menuRouter = require('../../controllers/menu/index');


router.put('/:id', menuRouter.putMenuById);

router.delete('/:id', menuRouter.delMenuById);

router.get('/', menuRouter.getAllMenu);

router.post('/', menuRouter.postMenu);

module.exports = router;


