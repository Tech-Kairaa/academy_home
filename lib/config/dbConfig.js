const config = {
	dbUri: process.env.MONGODB_URI,
	learner: {
		_db: 'learner',
		users: 'users',
		profiles: 'profiles',
	},
	instructor: {
		_db: 'instructor',
		users: 'users',
	},
	academy: {
		_db: 'academy',
		courses: 'courses',
		offers: 'offers',
		pricing: 'pricing',
		reviews: 'reviews',
	},
};

export default config;
