import { Router } from 'express';

import { getLinks, addLink } from '../controllers/link';

const router = Router();

router.get('/links', getLinks);
router.post('/links', addLink);

export default router;
