const { ObjectId, Timestamp } = require('mongodb');

const courses = {
	_id: ObjectId,
	courseId: String,
	instructorId: ObjectId(instructor.users._id),
	pricingId: ObjectId(pricing._id),
	approved: Boolean,
	published: Boolean,
	info: {
		title: String,
		description: String,
		banner: String,
		thumbnail: String,
		duration: String,
		updated: Timestamp,
		language: String,
		category: String,
		tag: String,
	},
	modules: [
		{
			title: String,
			totalDuration: String,
			content: [{ subTitle: String, description: String, duration: String }],
		},
	],
};

const reviews = {
	_id: ObjectId,
	courseId: ObjectId(courses._id),
	posts: [
		{
			learnerId: ObjectId(leaner.users._id),
			rating: Number,
			comment: String,
			postedAt: Timestamp,
		},
	],
};

const pricing = {
	_id: ObjectId,
	courseId: courses.courseId,
	offersId: ObjectId(offers._id),
	price: {
		inr: Number,
		kait: Number,
	},
};

const offers = {
	_id: ObjectId,
	offerCode: String,
	offerPercent: {
		inr: Number,
		kait: Number,
	},
	offerValid: String,
};
