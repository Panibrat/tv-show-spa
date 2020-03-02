import axios from 'axios';

const request = `http://api.tvmaze.com/shows/6771`; // The Powerpuff Girls
const episodesRequest = `http://api.tvmaze.com/shows/6771/episodes`; // The Powerpuff Girls Episodes
const baseEpisodeDetailsUrl = `http://api.tvmaze.com/episodes/`; // Episodes main information

export const getEpisodeDetailsApiRequest = id => axios.get(baseEpisodeDetailsUrl + id);

export const getTvShowApiRequest = () => axios.get(request);

export const getEpisodesApiRequest = () => axios.get(episodesRequest);
