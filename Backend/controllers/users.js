import { UserModel } from "../model/User.js";

export const getAllUsers = async (req, res) => {
	// console.log(req.session)

	try {
		const allUsers = await UserModel.find({}).sort({ points: -1 }).select('-phone -password');
		return res.status(200).json(allUsers);
	} catch (error) {
		res.status(504).json(error);
	}
};

export const getCurrentUser = async (req, res) => {
	// const userID = req.params.userID;
	const userID = req.session.user;
	try {
		const user = await UserModel.findById(userID);
		return res.status(200).json(user);
	} catch (error) {
		return res.status(504).json(error);
	}
};

export const updateUser = async (req, res) => {
	const { name, email, sem, branch, phone } = req.body;
	const userID = req.session.user;
	try {
		await UserModel.findByIdAndUpdate(userID, {
			name: name,
			email: email,
			sem: sem,
			branch: branch,
			phone: phone,
		});
		const updatedUser = await UserModel.findById(userID);
		return res.status(200).json(updatedUser);
	} catch (error) {
		return res.status(504).json(error);
	}
};

export const deleteUser = async (req, res) => {
	// const userID = req.params.userID;
	const userID = req.session.user;
	try {
		await UserModel.findByIdAndRemove(userID);

		return res.status(200).json({ msg: `User is deleted!` });
	} catch (error) {
		return res.status(504).json(error);
	}
};

export const singleUser = async (req, res) => {
	const userID = req.params.resID;

	try {
		const user = await UserModel.findById(userID);
		return res.json(user);
	} catch (error) {
		return res.json(error);
	}
};

export const updatePoints = async (req, res) => {
	const { point } = req.body;

	try {
		await UserModel.findByIdAndUpdate(req.params.resID, {
			points: point,
		});
		const updatedUser = await UserModel.findById(req.params.resID);
		return res.status(200).json(updatedUser);
	} catch (error) {
		return res.status(504).json(error);
	}
};
