import axios from 'axios';

const request = `http://api.tvmaze.com/shows/6771`; // The Powerpuff Girls
const episodesRequest = `http://api.tvmaze.com/shows/6771/episodes`; // The Powerpuff Girls Episodes

export const getApiRequest = () => axios.get(request);

export const getEpisodesApiRequest = () => axios.get(episodesRequest);
