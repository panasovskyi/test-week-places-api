import axios from 'axios';

const BASE_URL = '/api';
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