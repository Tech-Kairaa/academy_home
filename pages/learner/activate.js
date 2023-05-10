import { useRouter } from 'next/router';
import React from 'react';

const Activate = () => {
	const router = useRouter();
	const userId = router.query.learner;
	return <div>{userId}</div>;
};

export default Activate;
