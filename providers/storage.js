export const loadState = (stateName) => {
	try {
		const serializedState = localStorage.getItem(stateName);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};
export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state.value);
		localStorage.setItem(state.name, serializedState);
	} catch (err) {
		return undefined;
	}
};
