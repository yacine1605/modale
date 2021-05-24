import { useState } from 'react';
import axios from 'axios';
import './fish.css';
import { Input, Button, Typography } from 'antd';

const { Title } = Typography;
const Fish = () => {
	const initialState = [
		{
			date: 'yyyy-MM-dd',
			wilaya: '',
			port: '',
			nom: '',
			poids: '',
			taille: '',
		},
	];

	const [form, setForm] = useState();
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
		console.log(form);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
		console.log(intermediateState);
	};

	return (
		<div className="body_fi">
			<div className="conatiner">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					{initialState.map((form) => (
						<table className="tg">
							<thead>
								<tr>
									<th className="tg-0pky">Date</th>
									<th className="tg-0pky">Wilaya</th>
									<th className="tg-0pky">Port </th>
									<th className="tg-0pky">Nom commun de l’espèce</th>
									<th className="tg-0pky">Poids en gramme</th>
									<th className="tg-0pky">Taille en cm</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="tg-0pky">
										<input
											type="date"
											id="start"
											name="date"
											onChange={(e) => {
												handel(e);
											}}
										/>
									</td>
									<td className="tg-0pky" name="wilaya">
										<select id="wilaya">
											<option
												name="wilaya"
												onChange={(e) => {
													handel(e);
												}}
												value="Ain Temouchent"
												className="Ain Temouchent"
											>
												Ain Temouchent
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Alger"
											>
												Alger
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Tipaza"
											>
												Tipaza
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="jijel"
												name="wilaya"
											>
												Jijel
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Annaba"
											>
												Annaba
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Bejaia"
											>
												Bejaia
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Boumerdes"
											>
												Boumerdes
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Chlef"
											>
												Chlef
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="El Tarf"
											>
												EL Tarf
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Mostaganem"
											>
												Mostagenem
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Oran"
											>
												Oran
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Skikda"
											>
												Skikda
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Tizi ouzou"
											>
												Tizi ouzou
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Tlemcen"
											>
												Tlemcen
											</option>
										</select>
									</td>

									<td className="tg-0pky">
										<select id="port">
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Beni-saf"
											>
												Beni-saf
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className=" Bouzedjar"
											>
												{' '}
												Bouzedjar
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Alger"
											>
												Alger
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="El Djamila"
											>
												El Djamila
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Tamentefoust"
											>
												Tamentefoust
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Annaba"
											>
												Annaba
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Chetaibi"
											>
												Chetaibi
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Béjaia"
											>
												{' '}
												Béjaia
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Béni K'sila"
											>
												Béni K'sila
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Dellys"
											>
												Dellys
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Djinet"
											>
												Djinet
											</option>
											<option
												onChange={(e) => {
													handel(e);
												}}
												className="Zemmouri"
											>
												Zemmouri
											</option>
										</select>
									</td>
									<td className="tg-0pky" name="nom">
										sardine onChange=
										{(e) => {
											handel(e);
										}}
									</td>
									<td className="tg-0pky">
										<Input
											name="poids"
											onChange={(e) => {
												handel(e);
											}}
										></Input>
									</td>
									<td className="tg-0pky">
										<Input
											name="taille"
											onChange={(e) => {
												handel(e);
											}}
										></Input>
									</td>
								</tr>
							</tbody>
						</table>
					))}
				</form>
			</div>
			<div className="btn-fish">
				<Button
					style={{
						backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%',
						borderRadius: '20%',
						paddingTop: '2%',
						paddingBottom: '4%',
						paddingRight: '3%',
						paddingLeft: '3%',
					}}
					onClick={() => {
						setForm(form);
						console.log(form);
					}}
					type="primary"
				>
					{' '}
					submit{' '}
				</Button>
			</div>
		</div>
	);
};

///		Zemmouri El Marsa Ténes El kala Boudis Ziama Mansouria Mostaganem Sidi Lakhdar Arzew Oran
//		Collo La Marsa Stora Bouharoun Cherchell Gouraya Khemisti Tipaza Azeffoun Tigzirt Ghazaouet
//		Honaine Marsa Ben M'hidi
export default Fish;
