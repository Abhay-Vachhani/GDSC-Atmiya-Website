import mongoose from "mongoose";

let queSchema = new mongoose.Schema({
	owner: String,
	email: String,

	que1: String,
	que2: String,
	que3: String,
	que4: String,
	que5: String,
	task: String,
	time: String,
	submitedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	},
	points: {
		type: Number,
		default: 0
	},
});

export const QueModel = mongoose.model("questions1", queSchema);
