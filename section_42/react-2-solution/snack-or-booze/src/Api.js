/** API calls for Snack or Booze. */

import axios from 'axios';

const BASE_API_URL = "http://localhost:5000";


/** Fetch list of type "snacks" or "drinks" */

export async function fetchItems(type) {
  let res = await axios.get(`${BASE_API_URL}/${type}`);
  return res.data;
}


/** Add item of type "snacks" or "drinks" */

export async function addItem(type, data) {
  await axios.post(`${BASE_API_URL}/${type}`, data);
}
