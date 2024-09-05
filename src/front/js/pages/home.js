import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RegisterForm from "../component/RegisterForm.jsx";
import UsersList from "../component/UsersList.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		// <div className="d-flex flex-column justify-content-center align-items-center bg-custom">
		<div className="d-flex justify-content-center align-items-center bg-custom py-5 gap-5">
			<RegisterForm/>
		</div>
	)
};

