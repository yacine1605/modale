const Prix = require('../../../models/prix');

const addData = async (req, res) => {
	const {
		Allaoche,
		/*Anchois,
		Sardine,
		Saurel,
		Rouget,
		Pageot,
		Merlan,
		Espadon,
		Crevette_blanche,
		Crevette_Rouge,*/
		destination,
	} = req.body;

	try {
		const newData = new Prix({
			Allaoche,
			/*Anchois,
			Sardine,
			Saurel,
			Rouget,
			Pageot,
			Merlan,
			Espadon,
			Crevette_blanche,
			Crevette_Rouge,*/
			destination,
		});
		await newData.save();
		res.status(201).json({
			message: 'data created',
			data: newData,
		});
	} catch (error) {
		console.log('Error ');
	}
};

module.exports = {
	addData,
};
