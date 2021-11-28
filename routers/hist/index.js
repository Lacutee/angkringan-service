const express = require('express');
const router = express.Router();

const HistRouter = require('../../controllers/hist/index');


router.get('/', HistRouter.getHist);

router.post('/', HistRouter.postHist);


module.exports = router;