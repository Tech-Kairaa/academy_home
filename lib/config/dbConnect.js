import { MongoClient } from 'mongodb';
import config from './dbConfig';

let cachedDb = null;

const dbConnect = async (dbName) => {
	if (cachedDb) {
		return cachedDb;
	}

	const client = await MongoClient.connect(config.dbUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db(dbName);

	cachedDb = db;
	return db;
};

export default dbConnect;
