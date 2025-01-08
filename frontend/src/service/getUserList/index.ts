export const getUserList = async () => {
	const response = await fetch("http://backend/api/sample");
	const data = await response.json();
	return data;
};
