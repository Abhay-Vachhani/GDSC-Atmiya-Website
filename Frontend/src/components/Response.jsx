import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { MdDoneAll } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import axiosInstance from "../axiosInstance";

const Response = () => {
	const [allResponse, setAllResponse] = React.useState([]);
	const [currentUser, setCurrentUser] = React.useState({});
	const navigate = useNavigate();

	React.useEffect(() => {
		(async () => {
			const user = await axiosInstance.get(
				window.BASE_API_URL + `/users/currentUser/${localStorage.getItem(
					"userID"
				)}`, { withCredentials: true }
			);
			setCurrentUser(user.data);
		})();
		(async () => {
			const res = await axiosInstance.get(window.BASE_API_URL + `/question/responses`, { withCredentials: true });
			setAllResponse(res.data);
		})();
	}, []);
	return (
		<div className="lg:w-10/12 sm:w-11/12   h-16  ">
			{currentUser.role === "Admin" ? (
				<div className="w-full  flex  flex-wrap justify-around my-4 relative h-full">
					{allResponse.map((res, index) => {
						return (
							<div
								onClick={() => {
									navigate(`/trivia/${res.submitedBy}`);
								}}
								className="flex  lg:w-3/12 sm:w-5/12 justify-evenly mx-3 items-center  cursor-pointer hover:bg-gray-100 trasnlate duration-150 delay-75 ease-in-out gap-6 px-7 text-xl py-5 bg-white shadow my-4 rounded-lg"
							>
								<div className="flex gap-3 justify-center items-center">
									<MdDoneAll size={26} />
									<p>{res.owner}</p>
								</div>
								<p className="text-xs text-gray-800">({res.time})</p>
							</div>
						);
					})}
				</div>
			) : (
				<div className="flex w-full h-auto justify-center ">
					<p className="px-3 flex gap-2 py-2 text-2xl item-center justify-center mt-12 text-center rounded-lg text-black   ">
						<FcInfo size={33} />
						Only admin can access to this!
					</p>
				</div>
			)}
		</div>
	);
};

export default Response;
