import React from 'react';

const Activate = ({ userId }) => {
	return <div>{userId}</div>;
};

export default Activate;

export async function getStaticProps(context) {
	const { params } = context;
	return {
		props: {
			userId: params.leaner,
		},
	};
}
