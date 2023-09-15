import React from "react";
import Navbar from "../components/Navbar";
import axiosInstance from "../axiosInstance";
import { MdOutlineDone } from "react-icons/md";
import "../index.css";
import { useNavigate, useParams } from "react-router-dom";

const Inquiry = () => {
	const { resID } = useParams();
	// const resID = window.location.href.slice(36);

	const navigate = useNavigate();
	const [response, setResponse] = React.useState({});
	const [point, setPoint] = React.useState();
	const [updated, setUpdated] = React.useState(false);
	const userID = localStorage.getItem("userID");

	React.useEffect(() => {
		if (!userID) {
			return navigate("/");
		}
		(async () => {
			const res = await axiosInstance.get(
				window.BASE_API_URL + `/question/singleResponse/${resID}`, { withCredentials: true }
			);
			setResponse(res.data);
		})();
		(async () => {
			const user = await axiosInstance.get(
				window.BASE_API_URL + `/users/singleUser/${resID}`, { withCredentials: true }
			);
			setPoint(user.data.points);
		})();
	}, []);

	const handleUpdate = async () => {
		try {
			await axiosInstance.put(window.BASE_API_URL + `/users/updatePoints/${resID}`, {
				point
			}, { withCredentials: true });
			setUpdated(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex bg-gray-100 w-screen flex-col h-auto  items-center ">
			<div className="w-screen">
				<Navbar />
			</div>

			{!updated ? (
				<div className="flex flex-col w-auto   text-black mt-32 gap-2">
					<p className="my-5 text-lg bg-white py-3 px-5 shadow ">
						{response[0]?.que1}
					</p>
					<p className="my-5 text-lg bg-white py-3 px-5 shadow">
						{response[0]?.que2}
					</p>
					<p className="my-5 text-lg bg-white py-3 px-5 shadow">
						{response[0]?.que3}
					</p>
					<p className="my-5 text-lg bg-white py-3 px-5 shadow">
						{response[0]?.que4}
					</p>

					<a className="my-5 text-lg  bg-white py-3 px-5 shadow">
						{response[0]?.task}
					</a>

					<div className="bg-white shadow my-5 px-5 py-4 my-4 h-auto w-auto">
						<p className="my-2">Set points </p>
						<input
							type="number"
							onChange={(e) => {
								setPoint(e.target.value);
							}}
							value={point}
							className="bg-blue-100 outline-none shadow px-5 py-3 rounded-xl"
						/>
					</div>

					<button
						onClick={handleUpdate}
						className="bg-blue-500 my-10 text-white w-full  px-5 py-3 hover:bg-white delay-75 hover:border-2 translate duration-150 border-2 border-white  hover:border-blue-500 hover:text-black rounded-md poop "
					>
						Update Points
					</button>
				</div>
			) : (
				<div
					className="flex flex-col mt-32 text-green-500 h-screen px-8 gap-10 py-3 
         text-3xl rounded-lg items-center justify-around"
				>
					<button
						className="bg-black px-5 py-2 text-xl w-20 rounded-2xl text-white"
						onClick={() => navigate(-1)}
					>
						Back
					</button>
					<div className="flex justify-center items-center gap-2">
						<MdOutlineDone size={29} />
						Updated!
					</div>
				</div>
			)}
		</div>
	);
};

export default Inquiry;
