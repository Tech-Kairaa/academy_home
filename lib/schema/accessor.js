const { ObjectId, Timestamp } = require('mongodb');

const admin = {
	_id: ObjectId,
	name: String,
	email: String,
	password: String,
	mobileNumber: Number,
	verification: {
		authCode: String,
		codeValidity: String,
		codeVerified: Boolean,
	},
	authentication: {
		token: String,
		loggedIn: Boolean,
		loggedAt: Timestamp,
	},
};

const subadmin = {
	_id: ObjectId,
	name: String,
	email: String,
	password: String,
	mobileNumber: Number,
	verification: {
		authCode: String,
		codeValidity: String,
		codeVerified: Boolean,
	},
	authentication: {
		token: String,
		loggedIn: Boolean,
		loggedAt: Timestamp,
	},
};
