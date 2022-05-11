import axios from "axios";

const partOne = "AIzaSyDv";
const partTwo = "kPANMnvZ8Rar2Xf3yC7VwjBNc3tM9M";
const API_KEY = [partOne, partTwo].join("_");

const authenticate = async (mode, email, password) => {
	const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

	const res = await axios.post(url, {
		email,
		password,
		returnSecureToken: true,
	});

	const token = res.data.idToken;
	return token;
};

export const createUser = (email, password) => {
	return authenticate("signUp", email, password);
};

export const login = (email, password) => {
	return authenticate("signInWithPassword", email, password);
};
