import { combineReducers } from 'redux';

import { reducer as tvShowReducer } from '../pages/TvShow/store/reducer';
import { reducer as episodeReducer } from '../pages/EpisodeDetail/store/reducer';

export default combineReducers({
    tvShow: tvShowReducer,
    episode: episodeReducer,
});
