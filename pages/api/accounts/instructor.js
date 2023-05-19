import config from '@/config/dbConfig';
import ConnectDB from '@/config/dbConnect';
const bcrypt = require('bcryptjs');

export default async function handler(req, res) {
	const { method } = req;
	const body = req.body;
	const db = await ConnectDB(config.instructor._db);
	const salt = bcrypt.genSaltSync(10);
	const collection = db.collection(config.instructor.users);

	switch (method) {
		case 'POST':
			const user = {
				name: body.fullName,
				email: body.email,
				password: bcrypt.hashSync(body.password, salt),
				verified: 0,
			};
			try {
				const exist = await collection.findOne({ email: user.email });
				if (!exist) {
					const result = await collection.insertOne(user);
					if (result.acknowledged) {
						res.status(200).json({ success: 1, data: result });
					} else {
						res.status(200).json({
							success: 0,
							type: 'FAILED_TO_REGISTER',
							message: 'Account registration failed. ',
						});
					}
				} else {
					if (exist.verified) {
						res.status(200).json({
							success: 0,
							type: 'ALREADY_EXIST',
							message: 'Account id already exist!',
						});
					} else {
						res.status(200).json({
							success: 0,
							type: 'NOT_VERIFIED',
							message: 'Account not verified',
						});
					}
				}
			} catch (error) {
				res.status(200).json({
					success: 0,
					type: 'DATABASE_ERROR',
					message: 'Error found when connecting database',
				});
			}
			break;

		case 'PUT':
			try {
				const result = await collection.updateOne(
					{ email: body.userId },
					{ $set: { verified: 1 } }
				);

				if (result.acknowledged) {
					res.status(200).json({
						success: 1,
						data: result,
					});
				} else {
					res.status(200).json({
						success: 0,
						type: 'UPDATE_FAILED',
						message: 'Account not activated.',
					});
				}
			} catch (error) {
				res.status(200).json({
					success: 0,
					type: 'DATABASE_ERROR',
					message: 'Error found when connecting database',
				});
			}

			break;

		default:
			res.status(200).json({
				success: 0,
				type: 'SERVER_ERROR',
				message: 'Error found when connecting database',
			});
	}
}
