import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Trivia from "./pages/Trivia";
import Inquiry from "./pages/Inquiry";

window.BASE_API_URL = 'http://localhost:8000'
window.redirect = () => {
	window.location.href = window.BASE_API_URL
}
// window.BASE_API_URL = 'http://127.0.0.1:8000'


function App() {
	return (
		<div>
			<BrowserRouter>

				<Routes>
					<Route path="/" element={<Auth />} />
					<Route path="/home" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/trivia" element={<Trivia />} />
					<Route path="/trivia/:resID" element={<Inquiry />} />
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;
