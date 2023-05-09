import { MongoClient } from 'mongodb';

let cachedDb = null;

const ConnectDB = async () => {
	if (cachedDb) {
		return cachedDb;
	}

	const client = await MongoClient.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db(process.env.MONGODB_DB);

	cachedDb = db;
	return db;
};

export default ConnectDB;
