import axios from 'axios';
import config from './config';

// const BASE_URL = 'https://2yahugzd4a.execute-api.eu-central-1.amazonaws.com/test'; // hosted in SA test account
const BASE_URL = config.BASE_URL;

export function getListings() {
  return axios(`${BASE_URL}/listings`);
}
