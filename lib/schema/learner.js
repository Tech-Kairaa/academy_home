const { ObjectId, Timestamp } = require('mongodb');

const users = {
	_id: ObjectId,
	name: String,
	email: String,
	password: String,
	verified: Boolean,
};

const profiles = {
	_id: ObjectId,
	userId: ObjectId(users._id),
	mobile: Number,
	avatar: String,
	residence: {
		building: String,
		city: String,
		state: String,
		country: String,
		pinCode: Number,
	},
	knowledge: {
		interestedIn: String,
		experienceIn: String,
		knowledgeLevel: String,
	},
};

const orders = {
	_id: ObjectId,
	userId: ObjectId(users._id),
	courses: Array,
	transactionId: String,
	orderId: String,
	payments: {
		amountFrom: String,
		amountTo: String,
		amountType: String,
		payableAmount: Number,
		offerPercent: Number,
		paidAmount: Number,
		paidAt: Timestamp,
	},
};
