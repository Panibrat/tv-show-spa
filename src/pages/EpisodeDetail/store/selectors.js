import { initState } from './reducer';

export const selectEpisodeDetailsData = store => store.episode.data || initState.data;
export const selectIsFetchingEpisodeDetailsData = store => store.episode.isFetching || initState.isFetching;
export const selectIsFailedEpisodeDetailsData = store => store.episode.isFailed || initState.isFailed;
