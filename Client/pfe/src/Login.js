import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Table from './table2';
import { useEffect } from 'react';

/*const handleSubmit = () => {
	// ... get data form
	// ... submit to API
     or something
};*/
//	const [data, setdata] = useState();
//	const [form, setForm] = useState(initialState);
const Login = () => {
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
		//console.log(loginResponse);
		setloginResponse(loginResponse);

		const user = JSON.parse(localStorage.getItem('user'));

		const token = loginResponse.data.data?.access_token;
		const recData = async (token) => {
			const { data } = await axios
				.get('http://localhost:5000/user/info', {
					headers: { Authorization: 'Bearer ' + token },
				})
				.catch((err) => console.log('Error', err));
			console.log(data);
			setData(data);
		};
		recData(token);
		if (token) {
			history.push('/user', { state: { data } });
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

					<button
						type="submit"
						onClick={() => {
							submit();
							<Table ladata={data?.data} />;
						}}
					>
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
};

export default Login;
