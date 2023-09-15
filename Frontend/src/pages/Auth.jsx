import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const Auth = () => {
	const navigate = useNavigate();
	const [auth, setAuth] = React.useState("REGISTER");
	const [user, setUser] = React.useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = React.useState("");

	const toggleAuth = () => {
		if (auth === "REGISTER") {
			setAuth("LOGIN");
			setUser({
				name: "",
				email: "",
				password: "",
			});
			setError("");
		}
		if (auth === "LOGIN") {
			setAuth("REGISTER");
			setUser({
				name: "",
				email: "",
				password: "",
			});
			setError("");
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (auth === "REGISTER") {
			try {
				const res = await axiosInstance.post(window.BASE_API_URL + "/auth/register", {
					...user
				}, { withCredentials: true });
				setError(res.data.msg);
				setAuth("LOGIN")

			} catch (error) {
				console.log(error);
			}
		}
		if (auth === "LOGIN") {
			try {
				const resxponse = await axiosInstance.post(window.BASE_API_URL + "/auth/login", {
					...user
				}, { withCredentials: true });
				setError(resxponse.data.msg);
				localStorage.setItem("userID", resxponse.data.userID);

				if (resxponse.data.userID) {
					return navigate("/home");
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="h-screen w-screen bg-gray-100 flex    justify-center items-center gap-20 ">
			<div className="h-screen lg:flex sm:hidden justify-center items-center lg:w-5/12 sm:w-0 ">
				{auth === "REGISTER" && (
					<p className="text-7xl text-gray-800    press">
						<span className="text-red-500 ">C</span>reate{" "}
						<span className="text-green-500">Y</span>our{" "}
						<span className="text-blue-500">A</span>ccoun
						<span className="text-yellow-400">T</span>
					</p>
				)}
				{auth === "LOGIN" && (
					<p className="text-7xl text-gray-800 press">
						<span className="text-red-500">L</span>ogin{" "}
						<span className="text-green-500">T</span>o{" "}
						<span className="text-blue-500">Y</span>our{" "}
						<span className="text-yellow-400">A</span>ccout
					</p>
				)}
			</div>

			<form
				className="lg:w-7/12 sm:w-11/12 flex justify-center items-center flex-col h-screen max-w-sm"
				onSubmit={handleSubmit}
				encType="multipart/form-data"
			>
				<div
					className={`bg-white shadow    w-full ${auth === "REGISTER" ? "h-4/6" : "h-3/6"
						} rounded-xl flex justify-center items-center flex-col`}
				>
					{auth === "REGISTER" && (
						<div className="flex flex-col justify-start items-start w-full px-10 my-3 ">
							<label className="block text-gray-500 font-bold text-lg mb-1 pr-4">
								Full Name
							</label>
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
								name="name"
								value={user.name}
								onChange={(e) => handleChange(e)}
								type="text"
								placeholder="Elon Musk"
							/>
						</div>
					)}

					<div className="flex flex-col w-full justify-start items-start my-3 px-10">
						<label className="block text-gray-500 text-lg font-bold mb-1 pr-4">
							Email
						</label>
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
							type="email"
							name="email"
							value={user.email}
							onChange={(e) => handleChange(e)}
							placeholder="abc@gmail.com"
						/>

						{(error === "User is not registered, Please register first!" ||
							error === "This email is already registered, simply login!") && (
								<p className="w-auto  text-red-500  text-sm mt-1  rounded-lg ">
									*{error}*
								</p>
							)}
					</div>

					<div className="flex flex-col w-full justify-start items-start my-3 px-10">
						<label className="block text-gray-500 text-lg font-bold mb-1 pr-4">
							Password
						</label>
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
							type="password"
							name="password"
							value={user.password}
							onChange={(e) => handleChange(e)}
							placeholder="******************"
						/>
						{error === "Password is incorrect!" && (
							<p className="w-auto  text-red-500  text-sm mt-1  rounded-lg ">
								*{error}*
							</p>
						)}
					</div>

					<div className="flex w-full px-10 my-5 justify-center items-center">
						<button
							className="shadow bg-blue-500 w-full  hover:bg-blue-400 duration-200  ease-in translate focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded"
							type="submit"
						>
							{auth === "REGISTER" ? "REGISTER" : "LOGIN"}
						</button>
					</div>

					<div className="flex justify-center items-center text-center my-2">
						<p className="text-black text-lg">
							{auth === "REGISTER"
								? "Already have an account?"
								: "Don't have an account?"}
							<span
								onClick={toggleAuth}
								className="text-red-500 hover:text-red-600 cursor-pointer underline ml-2 "
							>
								{auth === "REGISTER" ? "Login" : "Register"}
							</span>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Auth;
