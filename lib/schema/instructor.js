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
	experience: {
		experienceIn: String,
		experienceLevel: String,
		currentPosition: String,
	},
	accountInfo: {
		bankAccount: {
			accountNumber: Number,
			branch: String,
			IFCCode: String,
			accountHolder: String,
		},
		upiAccount: { upiId: String },
	},

	walletInfo: { walletId: String },
};

const offers = {
	_id: ObjectId,
	pricing: ObjectId(pricing._id),
	offerCode: String,
	offerValid: Timestamp,
	percentage: {
		inr: Number,
		kait: Number,
	},
};

const pricing = {
	_id: ObjectId,
	categoryName: String,
	description: String,
	price: {
		inr: Number,
		kait: Number,
	},
	duration: Number,
	benefits: Array,
};

const subscriptions = {
	_id: ObjectId,
	userId: ObjectId(users._id),
	pricingId: ObjectId(pricing._id),
	offersId: ObjectId(offers._id),
	subscribedAt: Timestamp,
};

const orders = {
	_id: ObjectId,
	userId: ObjectId(users._id),
	pricingId: ObjectId(pricing._id),
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

const earnings = {
	_id: ObjectId,
	userId: ObjectId(users._id),
	courseId: ObjectId(course._id),
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
