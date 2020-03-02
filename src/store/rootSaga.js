import { fork, all } from 'redux-saga/effects';

import { watchTvShowSaga, watchEpisodesListSaga } from '../pages/TvShow/store/saga';
import { watchEpisodeDetailSaga } from '../pages/EpisodeDetail/store/saga';

function* rootSaga() {
    yield all(
        [
            fork(watchTvShowSaga),
            fork(watchEpisodesListSaga),
            fork(watchEpisodeDetailSaga),
        ],
    );
}

export default rootSaga;
