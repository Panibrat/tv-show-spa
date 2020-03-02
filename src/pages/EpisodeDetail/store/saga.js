import { put, takeLatest, call } from 'redux-saga/effects';
import { actionTypes, episodeDetailSucceeded, episodeDetailFailed } from './actions';
import { getEpisodeDetailsApiRequest } from '../../../services/api.service';

export function* episodeDetailSaga(params) {
    const { id } = params;
    try {
        const { data } = yield call(getEpisodeDetailsApiRequest, id);
        yield put(episodeDetailSucceeded({ data }));

    } catch (e) {
        yield put(episodeDetailFailed());
    }
}

export function* watchEpisodeDetailSaga() {
    yield takeLatest(actionTypes.EPISODE_DETAIL_REQUESTED, episodeDetailSaga);
}
