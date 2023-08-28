// import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { BASE_URL } from "../../constant";
import styles from "./styles.module.css";
import queryString from "query-string";
import { dataContext } from "../../context/dataContext";

function Login() {
const {token,setToken} = useContext(dataContext)
	const googleAuth = () => {
		window.open(
			`${BASE_URL}auth/google`,
			"_self"
		);
	};

useEffect(() => {
		const { token } = queryString.parse(window.location.search);
		if(token){
			localStorage.setItem("token",token);
		}
}, [token])

useEffect(()=>{
	setToken(localStorage.getItem("token"))
},[])

	return (
	<div className={styles.app}>
			<div className={styles.container}>
			<img src="13.jpg" alt="form" />
			{/* <h1 className={styles.heading}>Log in Form</h1> */}
			<div className={styles.form_container}>
				<div className={styles.right}>
				 <h2 className={styles.from_heading}> Log in Form</h2>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing in with Google</span>
					</button>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Login;
