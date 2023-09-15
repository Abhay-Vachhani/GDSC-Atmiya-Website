import React from "react";
import "../index.css";
import { MdOutlineDone } from "react-icons/md";
import axiosInstance from "../axiosInstance";

const Question = () => {
	const [currentUser, setCurrentUser] = React.useState({});
	const [submitted, setSubmitted] = React.useState(false);
	React.useEffect(() => {
		(async () => {
			const res = await axiosInstance.get(
				window.BASE_API_URL + `/users/currentUser/${localStorage.getItem(
					"userID"
				)}`, { withCredentials: true }
			);
			setCurrentUser(res.data);
			setAnswer({ ...answer, email: res.data.email, owner: res.data.name });
		})();
	}, []);

	const currentTime = new Date();

	const options = {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
	};

	const formattedTime = currentTime.toLocaleTimeString(undefined, options);

	const [answer, setAnswer] = React.useState({
		owner: "",
		email: "",
		que1: "",
		que2: "",
		que3: "",
		que4: "",
		task: "",
		time: formattedTime,
		submitedBy: localStorage.getItem("userID"),
	});
	const handleChange = (e) => {
		const { value, name } = e.target;

		setAnswer({ ...answer, [name]: value });
	};


	const handleSubmit = async () => {
		window.scrollTo(0, 0);
		try {
			await axiosInstance.post(window.BASE_API_URL + `/question/submit`, {
				...answer
			}, { withCredentials: true });
			setSubmitted(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="lg:w-5/12 sm:w-10/12 flex flex-col my-2 relative h-auto  ">
			{!submitted ? (
				<div className="w-full flex flex-col my-2 relative h-auto">
					<div className="bg-white shadow flex flex-col  px-7 py-3 my-4 rounded-xl w-full">
						<p className="flex text-start text-lg font-bold">
							Which of the following best descibes the purpose of a 'Git
							Branch'?
						</p>

						<main className="my-2 mt-4">
							<input
								type="radio"
								name="que1"
								id="r1"
								value="To store a copies for backup purposes"
								onChange={(e) => handleChange(e)}
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r1">To store a copies for backup purposes</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								onChange={(e) => handleChange(e)}
								name="que1"
								id="r2"
								value="To isolate and work on a new feature or bug fix independently"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r2">
								To isolate and work on a new feature or bug fix independently
							</label>
						</main>

						<main className="my-2">
							<input
								value="To merge all code changes into a single branch"
								onChange={(e) => handleChange(e)}
								type="radio"
								name="que1"
								id="r3"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r3">
								To merge all code changes into a single branch
							</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								value="To delete old code version"
								onChange={(e) => handleChange(e)}
								id="r4"
								name="que1"
								className="px-3 py-1 text-sm my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r4">To delete old code version</label>
						</main>
					</div>

					<div className="bg-white shadow flex flex-col  px-7 py-3 my-4 rounded-xl w-full">
						<p className="flex text-start text-lg font-bold">
							When is it most appropriate to use a pull request on Github?
						</p>

						<main className="my-2 mt-4">
							<input
								type="radio"
								name="que2"
								id="r1"
								value="To create a backup copy of your repository"
								onChange={(e) => handleChange(e)}
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r1">
								To create a backup copy of your repository
							</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								onChange={(e) => handleChange(e)}
								name="que2"
								id="r2"
								value="To request help from your teammates"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r2">To request help from your teammates</label>
						</main>

						<main className="my-2">
							<input
								value="To propose changes to a repository and have them reviewed"
								onChange={(e) => handleChange(e)}
								type="radio"
								name="que2"
								id="r3"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r3">
								To propose changes to a repository and have them reviewed
							</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								value="To revert a previous commit"
								onChange={(e) => handleChange(e)}
								id="r4"
								name="que2"
								className="px-3 py-1 text-sm my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r4">To revert a previous commit</label>
						</main>
					</div>

					<div className="bg-white shadow flex flex-col  px-7 py-3 my-2 rounded-xl w-full">
						<p className="flex text-start text-lg font-bold">
							What is primary purpose of a Git repository's README file?
						</p>

						<main className="my-2 mt-4">
							<input
								type="radio"
								name="que3"
								id="r1"
								value="To store important code snippets"
								onChange={(e) => handleChange(e)}
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r1">To store important code snippets</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								onChange={(e) => handleChange(e)}
								name="que3"
								id="r2"
								value="To provide an overview of the project its purpose and how to use it"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r2">
								To provide an overview of the project its purpose and how to use
								it
							</label>
						</main>

						<main className="my-2">
							<input
								value="To list all contributors to the repository"
								onChange={(e) => handleChange(e)}
								type="radio"
								name="que3"
								id="r3"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r3">
								To list all contributors to the repository
							</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								value="To record the repository's Git history"
								onChange={(e) => handleChange(e)}
								id="r4"
								name="que3"
								className="px-3 py-1 text-sm my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r4">To record the repository's Git history</label>
						</main>
					</div>


					<div className="bg-white shadow flex flex-col  px-7 py-3 my-4 rounded-xl w-full">
						<p className="flex text-start text-lg font-bold">
							In Git, what is the purpose of a 'fork'?
						</p>

						<main className="my-2 mt-4">
							<input
								type="radio"
								name="que4"
								id="r1"
								value="To duplicate a repository"
								onChange={(e) => handleChange(e)}
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r1">To duplicate a repository</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								onChange={(e) => handleChange(e)}
								name="que4"
								id="r2"
								value="To request code reviews"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r2">
								To request code reviews
							</label>
						</main>

						<main className="my-2">
							<input
								value="To delete a repository"
								onChange={(e) => handleChange(e)}
								type="radio"
								name="que4"
								id="r3"
								className="px-3 py-1 text-sm  my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r3">
								To delete a repository
							</label>
						</main>

						<main className="my-2">
							<input
								type="radio"
								value="To create a new branch"
								onChange={(e) => handleChange(e)}
								id="r4"
								name="que4"
								className="px-3 py-1 text-sm my-1 rounded-md  bg-gray-200 "
							/>
							<label htmlFor="r4">To create a new branch</label>
						</main>
					</div>





					<div className="my-4 px-4 py-4 gap-2 bg-white shadow rounded-lg">
						<p className="text-3xl my-3 font-bold">TASKS: </p>
						<p>1. Download and set up Git on your machine</p>
						<p>2. Intialize your first repository and commit to it</p>
						<p>
							3. Create Github account, if not already! (Name should be proper
							like -firstNamelastName) Create repository and push local code to
							it ("intital commit")
						</p>
						<p>4. Create new branch and push code to it</p>
						<p>5. Merge two branches using Pull request</p>

						<p>
							6. Make changes to README file(add your name to it) and create
							Pull request
						</p>
						<input
							type="text"
							onChange={(e) => handleChange(e)}
							name="task"
							value={answer.task}
							className="px-3 mt-4 font-bold  py-3 w-full placeholder:text-black placeholder:text-opacity-40 bg-white rounded-lg shadow border-2 border-red-500"
							placeholder="*Copy paste your Github profile link here*"
						/>
					</div>
					<div className="flex flex-col justify-center my-5  items-center w-full">
						<button
							onClick={handleSubmit}
							className="bg-blue-500 px-5 poop hover:bg-white hover:border-blue-500 hover:text-black border-2 border-blue-500 duration-150 delay-75 ease-in-out py-3 rounded-md text-white"
						>
							Submit
						</button>
					</div>
				</div>
			) : (
				<div className="px-5 py-3 flex w-full h-screen text-3xl text-green-500 gap-3 justify-center items-center  ">
					<MdOutlineDone size={30} />
					<p>Submitted!</p>
				</div>
			)}
		</div>
	);
};

export default Question;
