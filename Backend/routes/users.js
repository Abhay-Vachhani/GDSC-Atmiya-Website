import express from "express";
import {
	deleteUser,
	getAllUsers,
	getCurrentUser,
	singleUser,
	updatePoints,
	updateUser,
} from "../controllers/users.js";

const router = express.Router();

const checkSessionExists = (req, res, next) => {
	if (!req.session.user) {
		return res.status(401).json({ error: 'Session not found' });
	}
	next();
};

router.use(checkSessionExists)

router.get("/currentUser/:userID", getCurrentUser);
router.get("/singleUser/:resID", singleUser);
router.get("/getAllUsers", getAllUsers);
router.patch("/updateUser/:userID", updateUser);
router.put("/updatePoints/:resID", updatePoints);

router.delete("/deleteUser/:userID", deleteUser);

export { router as UserRouter };
