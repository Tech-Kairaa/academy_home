import ConnectDB from 'lib/config/ConnectDB';
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

export default async function handler(req, res) {
	const { method } = req;
	const body = req.body;
	const query = req.query;
	const db = await ConnectDB(process.env.DB_FOR_ACCOUNTS);
	const salt = bcrypt.genSaltSync(10);
	const collection = db.collection(process.env.TABLE_FOR_LEARNER);

	switch (method) {
		case 'POST':
			const user = {
				name: body.fullName,
				email: body.email,
				password: bcrypt.hashSync(body.password, salt),
				verified: 0,
				registered: Date.now(),
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

		case 'GET':
			try {
				const exist = await collection.findOne({ email: query.email });
				if (!exist) {
					res.status(200).json({
						success: 0,
						type: 'NOT_FOUND',
						message: 'Account not found. Please signup!',
					});
				} else {
					if (bcrypt.compareSync(query.password, exist.password)) {
						if (exist.verified) {
							const user = await collection.find().toArray();
							const token = JWT.sign({ user }, process.env.SALT_CODE, {
								expiresIn: 60 * 5,
							});
							res.status(200).json({ success: 1, data: token });
						} else {
							res.status(200).json({
								success: 0,
								type: 'NOT_VERIFIED',
								message: 'Account not verified',
							});
						}
					} else {
						res.status(200).json({
							success: 0,
							type: 'WRONG_PASSWORD',
							message: 'You entered wrong password.',
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
