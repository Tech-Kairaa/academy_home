const JWT = require('jsonwebtoken');

export default async function handler(req, res) {
	const { method } = req;
	const body = req.body;

	switch (method) {
		case 'POST':
			JWT.verify(body.token, process.env.SALT_CODE, function (err, decoded) {
				if (err) {
					if (err.name === 'TokenExpiredError') {
						res.status(200).json({
							success: 0,
							type: 'TOKEN_EXPIRED',
							message: 'Given token is expired',
						});
					} else {
						res.status(200).json({
							success: 0,
							type: 'INVALID_TOKEN',
							message: 'Given token is invalid',
						});
					}
				} else {
					res.status(200).json({
						success: 1,
						data: decoded,
					});
				}
			});
			break;

		default:
			res.status(200).json({
				success: 0,
				type: 'TECHNICAL_ERROR',
				message: 'Some technic error found!',
			});
	}
}
