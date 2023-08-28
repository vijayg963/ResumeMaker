import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	const url = `http://localhost:5000/auth/login/success`;


	useEffect(() => {
		axios(url, { withCredentials: true }).then(res=>setUser(res.data.user._json))
	}, [])

// console.log(user)

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				{/* <Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/> */}
			</Routes>
		</div>
	);
}

export default App;
