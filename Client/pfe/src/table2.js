import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
const Table = ({ ladata }) => {
	const initialState = {
		Allaoche: {
			Production: '',
			prix_debarquement: {
				debarquemeent_min: '',

				debarquemeent_moy: '',

				debarquemeent_max: '',
			},
			prix_consommation: {
				consommation_min: '',

				consommation_moy: '',

				consommation_max: '',
			},
		},
		destination: '',
	};
	const [form, setForm] = useState(initialState);
	const location = useLocation();
	const { data } = location.state;

	const [datas, setdata] = useState('');

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/', {
			newData: form,
		});
		setdata(datas);
		console.log(datas);
	};

	
	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(e.target.name);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
		console.log(intermediateState);
	
	return (
		<div>
			<div className="date"> {moment().format('LL')}</div>

			<button> log out</button>
			<h5 style={{ marginLeft: '5%', paddingBottom: '1%' }}> DPRH:{ladata?.email}</h5>
			<h5 style={{ marginLeft: '5%', paddingBottom: '2%' }}> Port:{/*props?.ladata.port*/} </h5>
			<form onSubmit={(e) => e.preventDefault()}>
				<table className="tg">
					<thead>
						<tr>
							<th className="tg-0pky" rowSpan="2">
								Espece
							</th>
							<th className="tg-0pky" rowSpan="2">
								Production Totale(T)
							</th>
							<th className="tg-0pky" colSpan="3">
								Prix au debarquement;
							</th>
							<th className="tg-0pky" colSpan="3">
								Prix de la consommation
							</th>
							<th className="tg-0pky" rowSpan="2">
								observe
							</th>
						</tr>
						<tr>
							<td className="tg-f9cb"> Min</td>
							<td className="tg-f9cb"> Moyen</td>
							<td className="tg-f9cb"> Max</td>
							<td className="tg-f9cb">Min</td>
							<td className="tg-f9cb">Moyen</td>
							<td className="tg-f9cb">max</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="tg-0pky" name="Allaoche">
								Allaoche
							</td>
							<td className="tg-73oq">
								<input
									name="Production"
									placeholder="enter a number"
									onChange={(e) => {
										handel(e);
									}}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									name="debarquemeent_min"
									placeholder="enter a number"
									onChange={(e) => {
										handel(e);
									}}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input name="debarquemeent_moy" placeholder="enter a number" onChange={handel} />
							</td>
							<td className="tg-0pky">
								{' '}
								<input
									name="debarquemeent_max"
									placeholder="enter a number"
									onChange={(e) => {
										handel(e);
									}}
								/>
							</td>
							<td className="tg-0pky">
								<input
									name="consommation_min"
									placeholder="enter a number"
									onChange={(e) => handel(e)}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input
									name="consommation_moy"
									placeholder="enter a number"
									onChange={(e) => {
										handel(e);
									}}
								/>
							</td>
							<td className="tg-0pky">
								<input
									name="consommation_max"
									placeholder="enter a number"
									onChange={(e) => {
										handel(e);
									}}
								/>
							</td>
							<td style={{ paddingTop: '10%' }} className="tg-0pky" rowSpan="10">
								<input
									onChange={(e) => {
										handel(e);
									}}
									name="destination"
									placeholder="enter a number"
									style={{ paddingBottom: '25px' }}
								></input>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
			<button
				onClick={() => {
					//		postData(form);

					console.log(form);
				}}
			>
				submit
			</button>
		</div>
	);
};

export default Table;
