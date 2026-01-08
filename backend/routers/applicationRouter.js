import express from 'express';
import { isAuthenticated, isAuthorized } from '../middlewares/auth.js';
import { deleteAppliaction, employerGetApplication, jobSeekerGetApplication, postApplication } from '../controllers/applicationController.js';
const router = express.Router();

router.post("/post/:id",isAuthenticated, isAuthorized("Job Seeker"),postApplication );

router.get("/employer/getall", isAuthenticated, isAuthorized("Employer"),employerGetApplication);

router.get("/jobseeker/getall", isAuthenticated, isAuthorized("Job Seeker"),jobSeekerGetApplication);

router.delete("/delete/:id", isAuthenticated, deleteAppliaction);


export default router;
