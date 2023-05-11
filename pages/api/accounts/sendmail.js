import ConnectDB from '@/config/ConnectDB';
// const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');
import ActivationLink from 'src/Templates/ActivationLink';

export default async function handler(req, res) {
	const { method } = req;
	const body = req.body;
	const db = await ConnectDB(process.env.DB_FOR_ACCOUNTS);
	// const salt = bcrypt.genSaltSync(10);
	// const userId = bcrypt.hashSync(body.userId, salt);
	const collection = db.collection(process.env.TABLE_FOR_LEARNER);
	const token = JWT.sign({ userId: body.userId }, process.env.SALT_CODE, {
		expiresIn: 60 * 20,
	});

	switch (method) {
		case 'POST':
			try {
				const exist = await collection.findOne({ email: body.userId });
				if (exist) {
					if (!exist.verified) {
						const transporter = nodemailer.createTransport({
							host: process.env.MAILER_HOST,
							port: process.env.MAILER_PORT,
							secure: false,
							auth: {
								user: process.env.MAILER_USER,
								pass: process.env.MAILER_PASSWORD,
							},
						});

						const message = {
							from: `Team Kairaa Academy <${process.env.MAILER_EMAIL}>`,
							to: body.userId,
							subject: 'Received Link From Kairaa Academy',
							html: ActivationLink(token, body.userType),
						};

						transporter.sendMail(message, (err, info) => {
							if (err) {
								res.status(200).json({
									success: 0,
									type: 'MAIL_NOT_SEND',
									message: 'Activation email not send.',
								});
							} else {
								res.status(200).json({
									success: 1,
									type: 'MAILED_SUCCESSFULLY',
									data: info,
								});
							}
						});
					} else {
						res.status(200).json({
							success: 0,
							type: 'ALREADY_VERIFIED',
							message: 'Account already verified. ',
						});
					}
				} else {
					res.status(200).json({
						success: 0,
						type: 'NOT_EXIST',
						message: 'Email id not exist!',
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
