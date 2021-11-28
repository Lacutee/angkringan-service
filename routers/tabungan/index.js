const express = require('express');
const router = express.Router();

const TabunganRouter = require('../../controllers/tabungan/index');


router.get('/', TabunganRouter.getTabungan);

router.post('/', TabunganRouter.postTabungan);



