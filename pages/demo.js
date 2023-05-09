import React from 'react';

const Demo = () => {
	let data = {
		name: 'raj',
		age: 20,
	};

	data.age = 24;

	console.log(data);

	return <div>demo</div>;
};

export default Demo;
