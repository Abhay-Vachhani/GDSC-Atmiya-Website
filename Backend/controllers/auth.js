import { UserModel } from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
	const { email, password, name } = req.body;

	const user = await UserModel.findOne({ email });
	if (user) {
		return res
			.status(208)
			.json({ msg: "This email is already registered, simply login!" });
	}

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(password, salt, async function (err, hash) {
			const newUser = new UserModel({
				name,
				// profilePic: file,
				email,
				password: hash,
			});
			await newUser.save();
			return res.status(200).json(newUser);
		});
	});
};

export const login = async (req, res) => {
	const { name, email, password } = req.body;

	// console.log(req.session)

	const dbuser = await UserModel.findOne({ email });
	if (!dbuser) {
		return (
			res
				// .status(208)
				.json({ msg: `User is not registered, Please register first!` })
		);
	}

	let checkPassword = false;
	checkPassword = await bcrypt.compare(password, dbuser.password);
	if (checkPassword === false) {
		return res.json({ msg: `Password is incorrect!`, login: false });
	}

	const token = jwt.sign({ userID: dbuser._id }, process.env.SECRET);

	req.session.user = dbuser._id.toString()

	res.json({ token, userID: 'Id Is Removed' });
};
