// import ConnectDB from '@/config/ConnectDB';
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
import ActivationLink from 'src/Templates/ActivationLink';

export default async function handler(req, res) {
	const { method } = req;
	const body = req.body;
	// const db = await ConnectDB();
	const salt = bcrypt.genSaltSync(10);
	const userId = bcrypt.hashSync(body.userId, salt);
	// const collection = db.collection('learner');

	switch (method) {
		case 'POST':
			const transporter = nodemailer.createTransport({
				host: 'smtp-relay.sendinblue.com',
				port: 587,
				secure: false,
				auth: {
					user: 'admin@kaitcrypto.com',
					pass: '7DUI9X2npZ6jPqah',
				},
			});

			const message = {
				from: 'team@kairaa.com',
				to: 'kairaaservices@gmail.com',
				subject: 'Message title',
				text: 'Plaintext version of the message',
				html: ActivationLink(userId, body.userType),
			};

			transporter.sendMail(message, (err, info) => {
				err && res.status(200).json({ success: 0, message: err });
				info && res.status(200).json({ success: 1, data: info });
			});

			// try {
			// 	const exist = await collection.findOne({ email: user.email });
			// 	if (!exist) {
			// 		const result = await collection.insertOne(user);
			// 		if (result.acknowledged) {
			// 			res.status(200).json({ success: 1, data: result });
			// 		} else {
			// 			res.status(200).json({
			// 				success: 0,
			// 				type: 'FAILED_TO_REGISTER',
			// 				message: 'Account registration failed. ',
			// 			});
			// 		}
			// 	} else {
			// 		res.status(200).json({
			// 			success: 0,
			// 			type: 'ALREADY_EXIST',
			// 			message: 'Email id already exist!',
			// 		});
			// 	}
			// } catch (error) {
			// 	res.status(200).json({
			// 		success: 0,
			// 		type: 'DATABASE_ERROR',
			// 		message: 'Error found when connecting database',
			// 	});
			// }
			break;

		default:
			res.status(200).json({
				success: 0,
				type: 'SERVER_ERROR',
				message: 'Error found when connecting database',
			});
	}
}
