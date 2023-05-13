import { MongoClient } from 'mongodb';

let cachedDb = null;

const ConnectDB = async (dbName) => {
	if (cachedDb) {
		return cachedDb;
	}

	const client = await MongoClient.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db(dbName);

	cachedDb = db;
	return db;
};

export default ConnectDB;
