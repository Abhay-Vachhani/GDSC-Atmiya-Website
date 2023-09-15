import express from "express";
import {
	fetchRespones,
	fetchSingleResponse,
	submitQuestions,
} from "../controllers/question.js";

const router = express.Router();

const checkSessionExists = (req, res, next) => {
	if (!req.session.user) {
		return res.status(401).json({ error: 'Session not found' });
	}
	next();
};

router.use(checkSessionExists)

router.post("/submit", submitQuestions);
router.get("/responses", fetchRespones);
router.get("/singleResponse/:resID", fetchSingleResponse);

export { router as QuestionRouter };
