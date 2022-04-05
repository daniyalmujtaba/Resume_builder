

import express from 'express';
import controller from '../controllers/resume';
import extractFirebaseInfo from '../middleware/firebaseInfo';
import customResume from '../middleware/customResume';
const router = express.Router();

router.get('/read/:resumeID', extractFirebaseInfo, controller.read);
router.post('/create',extractFirebaseInfo, customResume.ValidateInput, controller.create);
router.patch('/update/:resumeID',extractFirebaseInfo, controller.update);
router.delete('/delete/:resumeID', extractFirebaseInfo, controller.deleteResume);
router.get('/readAll/:userID',extractFirebaseInfo,controller.readAll);

export default router;  