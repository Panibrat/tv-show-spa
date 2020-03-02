import axios from 'axios';

const baseUrl = `http://api.tvmaze.com/episodes/`; // Episode main information

export const getApiRequest = id => axios.get(baseUrl + id);
