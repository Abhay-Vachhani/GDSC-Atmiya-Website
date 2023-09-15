import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		file: {
			type: String,
		},
		phone: {
			type: String,
			default: "",
		},
		branch: {
			type: String,
		},
		sem: {
			type: String,
			default: "",
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "User",
		},
	},
	{
		timestamps: true,
	}
);

export const UserModel = mongoose.model("users", userSchema);
