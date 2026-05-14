import axios from "axios";

const BASE_URL = "/api";
//const BASE_URL = "https://places-api.foursquare.com";
const API_KEY = process.env.PLACES_API_KEY;

if (!API_KEY) {
  throw new Error("Missing PLACES_API_KEY env variables");
}

export const apiFoursquare = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Accept: "application/json",
    "X-Places-Api-Version": "2025-06-17",
  },
});

apiFoursquare.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "An unexpected error occurred";

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;

      errorMessage =
        (status && HTTP_ERRORS[status]) || data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return Promise.reject(new Error(errorMessage));
  },
);

const HTTP_ERRORS: Record<number, string> = {
  401: "Please check your permissions.",
  403: "Access forbidden.",
  404: "Resource not found.",
  429: "Too many requests. Please try again later.",
  500: "Server error. Please try again later.",
};
