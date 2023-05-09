import ConnectDB from '@/config/ConnectDB';
const bcrypt = require('bcryptjs');

export default async function handler(req, res) {
	const { method } = req;
	const query = req.body;
	const db = await ConnectDB();

	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(
		process.env.PASSWORD_SALT + query.password,
		salt
	);

	const user = {
		name: query.fullname,
		email: query.email,
		password: hashedPassword,
		verified: 0,
		registered: new Date(),
	};

	const collection = db.collection('learner');
	// const data = await collection.find({}).toArray();

	switch (method) {
		case 'POST':
			try {
				const exist = await collection.findOne({ email: user.email });
				if (!exist) {
					const result = await collection.insertOne(user);
					if (result.acknowledged) {
						res.status(200).json({ success: 1, data: result });
					} else {
						res.status(200).json({
							success: 0,
							message: 'Account registration failed. ',
						});
					}
				} else {
					res.status(200).json({
						success: 0,
						message: 'Email id already exist!',
					});
				}
			} catch (error) {
				res.status(200).json({
					success: 0,
					message: 'Error found when connecting database',
				});
			}
			break;

		case 'GET':
			try {
				const exist = await collection.findOne({ email: query.email });
				if (!exist || exist.password !== query.password) {
					res.status(200).json({
						success: 0,
						message: 'Invalid email or password',
					});
				} else {
					if (!exist.isVerified) {
						res.status(200).json({
							success: 0,
							message: 'Account not verified',
						});
					} else {
						const user = await collection.find().toArray();
						res.status(200).json({ success: true, data: user });
					}
				}
			} catch (error) {
				res.status(200).json({
					success: false,
					message: 'Error found when connecting database',
				});
			}
			break;

		default:
			res.status(200).json({ data: 'server running..' });
	}
}
