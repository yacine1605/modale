import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

/*const handleSubmit = () => {
	// ... get data form
	// ... submit to API or something
};*/
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
			<form onSubmit={(e) => e.prevent.default}>
				<div className="imgcontainer">
					<img src="img_avatar2.png" alt="Avatar" className="avatar" />
				</div>

				<div className="container">
					<label htmlFor="uname">
						<b>Username</b>
					</label>
					<input
						type="text"
						placeholder="Enter Username"
						required
						onChange={(e) => {
							setInput(e.target.value);
						}}
						value={input.username}
					/>

					<label htmlFor="psw">
						<b>Password</b>
					</label>
					<input
						type="password"
						placeholder="Enter Password"
						onChange={(e) => {
							setInput(e.target.value);
						}}
						value={input.password}
					/>

					<button type="submit" onClick={() => postData()}>
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
