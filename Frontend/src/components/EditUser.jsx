import React from "react";
import "../index.css";
import axiosInstance from "../axiosInstance";
const EditUser = ({ close, user, index }) => {
	const [update, setUpdate] = React.useState({
		name: user.name,
		email: user.email,
		points: user.points,
	});

	const handleChange = (e) => {
		const { value, name } = e.target;

		setUpdate({ ...update, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axiosInstance.patch(window.BASE_API_URL + `/users/updateUser/${user._id}`, {
				...update
			}, { withCredentials: true });

		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async () => {
		try {
			await axiosInstance.delete(window.BASE_API_URL + `/users/deleteUser/${user._id}`, { withCredentials: true });

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col w-auto  justify-center items-center">
			<div>
				<img
					src="https://imgs.search.brave.com/9A5-7hWDwCh-3_iPxFz8CAP2V-LmLxc0GMlJdnYhe6U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzMwMzU0OS5qcGc"
					alt="pfp"
					className="h-36 w-36 rounded-full mb-6 object-contain"
				/>
			</div>
			<div className="flex flex-col  my-4">
				<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
					Name
				</label>
				<input
					type="text"
					name="name"
					onChange={(e) => handleChange(e)}
					className="bg-yellow-50 text-xl appearance-none border-2 border-white w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
					value={update.name}
				/>
			</div>

			<div className="flex flex-col  justify-start items-start my-4 ">
				<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
					Email
				</label>

				<input
					type="text"
					name="email"
					onChange={(e) => handleChange(e)}
					className="bg-yellow-50 text-xl appearance-none border-white border-2  w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
					value={update.email}
				/>
			</div>

			<div className="flex flex-col justify-start items-start my-4">
				<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
					Points
				</label>
				<input
					onChange={(e) => handleChange(e)}
					name="points"
					type="text"
					className="bg-yellow-50 text-xl appearance-none border-white border-2 w-full  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
					value={update.points}
				/>
			</div>
			<div className="flex gap-2 w-full    mx-4 mt-8 poop">
				<button
					onClick={handleDelete}
					className="bg-red-500  hover:bg-red-700  translate duration-150 ease-in-out cursor-pointer text-white flex justify-center items-center rounded-md w-2/3 px-3 py-2"
				>
					Delete
				</button>
				<button
					onClick={handleSubmit}
					className="bg-blue-500 hover:bg-blue-700 translate duration-150 ease-in-out  cursor-pointer rounded-md flex justify-center items-center  text-white px-3 w-2/3 py-2"
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default EditUser;
