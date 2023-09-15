import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const Profile = () => {
	const currentUser = localStorage.getItem("userID");
	const [user, setUser] = React.useState({});
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!currentUser) {
			return navigate("/");
		}
		(async () => {
			const res = await axiosInstance.get(
				window.BASE_API_URL + `/users/currentUser/${currentUser}`, { withCredentials: true }
			);
			setUser(res.data);
			setUpdateUser({
				...updateUser,
				email: res.data.email,
				name: res.data.name,
				phone: res.data.phone,
				branch: res.data.branch,
				sem: res.data.sem,
			});
		})();
	}, []);

	const [updateUser, setUpdateUser] = React.useState({
		name: "",
		email: "",
		phone: "",
		branch: "",
		sem: "",
	});


	const handleChange = (e) => {
		const { name, value } = e.target;

		setUpdateUser({ ...updateUser, [name]: value });
	};

	const handleUpdate = async (e) => {
		e.preventDefault();

		try {
			await axiosInstance.patch(window.BASE_API_URL + `/users/updateUser/${user._id}`, {
				...updateUser
			}, { withCredentials: true });
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async () => {
		try {
			await axiosInstance.delete(window.BASE_API_URL + `/users/deleteUser/${user._id}`, { withCredentials: true });
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-screen h-screen flex      bg-gray-100">
			<Navbar />

			<div className="lg:w-5/12 sm:hidden h-full gap-1 flex-col   justify-center items-center lg:flex">
				<p className="press my-5 text-6xl flex flex-col justify-center items-center text-center ">
					<span className=" text-9xl text-blue-500 ">{user.points}</span> PTs
				</p>
			</div>

			<div className="lg:w-7/12 sm:w-11/12 h-full  flex-col flex justify-center items-center">
				<p className="press mt-10 mb-5  text-2xl flex flex-col lg:hidden sm:block  justify-center items-center text-center ">
					<span className=" text-5xl text-blue-500 ">{user.points}</span> PTs
				</p>
				<main className="bg-white rounded-xl  lg:w-6/12 sm:w-10/12 shadow flex flex-col justify-center items-center px-2 py-10">
					<div className="flex flex-col w-8/12 justify-start items-start my-2 ">
						<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
							Name
						</label>

						<input
							type="text"
							name="name"
							onChange={(e) => handleChange(e)}
							className="bg-blue-100  appearance-none text-lg border-white border-2  w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400"
							value={updateUser.name}
						/>
					</div>
					<div className="flex flex-col w-8/12 justify-start items-start my-3 ">
						<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
							Email
						</label>

						<input
							type="text"
							name="email"
							onChange={(e) => handleChange(e)}
							className="bg-blue-100  appearance-none text-lg border-white border-2  w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400"
							value={updateUser.email}
						/>
					</div>
					<div className="flex flex-col w-8/12 justify-start items-start my-3 ">
						<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
							Phone Number
						</label>

						<input
							type="text"
							name="phone"
							onChange={(e) => handleChange(e)}
							className="bg-blue-100  appearance-none text-lg border-white border-2  w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400"
							value={updateUser.phone}
						/>
					</div>

					<div className="flex w-8/12 gap-4 justify-between  my-3">
						<div className="w-full   cursor-pointer ">
							<label
								className="block text-gray-500 font-bold text-lg mb-1 pr-4"
								for="grid-state"
							>
								Branch
							</label>
							<div className="relative">
								<select
									value={updateUser.branch}
									name="branch"
									onChange={(e) => handleChange(e)}
									className="block appearance-none w-full bg-blue-100 border-2 border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
									id="grid-state"
								>
									<option name="Default" value="Default">
										Branch
									</option>
									<option name="BCA" value="BCA">
										BCA
									</option>
									<option name="Btech" value="Btech">
										Btech
									</option>
									<option name="MCA" value="MCA">
										MCA
									</option>
									<option name="BSC IT" value="BSC IT">
										{" "}
										BSC IT
									</option>
									<option name="MSC IT" value="MSC IT">
										MSC IT
									</option>
									<option name="Btech IT" value="Btech IT">
										Btech IT
									</option>
									<option name="Others" value="Others">
										Others
									</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>

						<div className="w-full cursor-pointer">
							<label
								className="block text-gray-500 font-bold text-lg mb-1 pr-4"
								for="grid-state"
							>
								Semester
							</label>
							<div className="relative">
								<select
									name="sem"
									value={updateUser.sem}
									onChange={(e) => handleChange(e)}
									className="block appearance-none w-full bg-blue-100 border-2 border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
									id="grid-state"
								>
									<option value={"Default"}>Semester</option>
									<option value={"1st"}>1st</option>
									<option value={"3rd"}>3rd</option>
									<option value={"5th"}>5th</option>
									<option value={"7th"}>7th</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					<div className="flex gap-5 justify-center  text-white items-center mt-8  w-9/12">
						<button
							onClick={handleDelete}
							className="bg-red-500 px-5 py-3 hover:bg-white delay-75 hover:border-2 border-2 border-white translate duration-150  hover:border-red-500 hover:text-black rounded-md poop "
						>
							Delete Account
						</button>
						<button
							onClick={handleUpdate}
							className="bg-blue-500 px-5 py-3 hover:bg-white delay-75 hover:border-2 translate duration-150 border-2 border-white  hover:border-blue-500 hover:text-black rounded-md poop "
						>
							Update
						</button>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Profile;
