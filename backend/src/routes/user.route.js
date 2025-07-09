import { Router } from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getALlUsers } from '../controller/user.controller.js';

const router = Router();

router.get("/", protectRoute, getALlUsers);

export default router;