import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

/*const handleSubmit = () => {
	// ... get data form
	// ... submit to API
     or something
};*/
//	const [data, setdata] = useState();
//	const [form, setForm] = useState(initialState);
function Login() {
	const [loginResponse, setloginResponse] = useState();
	const [form, setForm] = useState({
		username: '',
		password: '',
	});
	const [data, setData] = useState();

	const history = useHistory();
	const submit = async () => {
		const loginResponse = await axios
			.post(`http://localhost:5000/user/login`, { username: form.username, password: form.password })
			.catch((err) => console.log('Error', err));
		console.log(loginResponse);
		setloginResponse(loginResponse);
		const user = JSON.parse(localStorage.getItem('user'));

		if (loginResponse !== undefined) {
			console.log(loginResponse.data.data.access_token);
			if (loginResponse.data.data.access_token) {
				localStorage.setItem('user', JSON.stringify(loginResponse.data.data?.access_token));
			}
		}
	};
	const logout = () => {
		localStorage.removeItem('user');
	};
	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(e.target.name);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
	};

	return (
		<>
			<h2> Marhba </h2>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="imgcontainer">
					<img src="img_avatar2.png" alt="Avatar" className="avatar" />
				</div>

				<div className="container">
					<label>
						<b>Username</b>
					</label>
					<input
						name="username"
						type="text"
						placeholder="Enter Username"
						required
						onChange={(e) => {
							handel(e);
						}}
					/>

					<label htmlFor="psw">
						<b>Password</b>
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						required
						onChange={(e) => {
							handel(e);
						}}
					/>

					<button type="submit" onClick={submit}>
						Login
					</button>
				</div>

				<div className="container">
					<button type="button" className="cancelbtn">
						Cancel
					</button>
				</div>
			</form>
		</>
	);
}

export default Login;
