import express from 'express';

import {getdetails, search} from '../controllers/details.js';

const router = express.Router();

router.post('/',search)
router.get("/",getdetails)

export default router;