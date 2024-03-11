import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
	(config) => {
		const accessToken = cookies.get('access_token');
		const returnConfig = { ...config };
		if (accessToken) {
			returnConfig.headers!['Authorization'] = `Bearer ${accessToken}`;
		}
		return returnConfig;
	},
	(error: AxiosError) => Promise.reject(error)
);