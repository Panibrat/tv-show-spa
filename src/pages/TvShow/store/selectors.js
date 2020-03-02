import { initState } from './reducer';

export const selectShowData = store => store.tvShow.data || initState.data;
export const selectIsFetchingShowData = store => store.tvShow.isFetching || initState.isFetching;
export const selectEpisodesListShowData = store => store.tvShow.episodesList || initState.episodesList;
