export default function handler(req, res) {
	if (req.method === 'POST') {
		const body = req.body.testData;
		return res.status(200).json(body);
	} else {
		return res.status(200).json('false');
	}

	/* var nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
		host: 'mail.kairaa.in',
		port: 465,
		auth: {
			user: 'tech@kairaa.in',
			pass: 'Kairaa@123',
		},
	});

	var mailOptions = {
		from: 'gprajutr2@gmail.com',
		to: 'tech@kairaa.in',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!',
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			res.json(error);
		} else {
			res.json(req.body);
		}
	}); */
}
