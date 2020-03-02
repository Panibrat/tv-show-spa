import { put, takeLatest, call } from 'redux-saga/effects';

import { actionTypes, episodeDetailSucceeded, episodeDetailFailed } from './actions';
import { getApiRequest } from '../service/api.service';

export function* episodeDetailSaga(params) {
    const { id } = params;
    try {
        const { data } = yield call(getApiRequest, id);
        yield put(episodeDetailSucceeded({ data }));

    } catch (e) {
        yield put(episodeDetailFailed());
    }
}

export function* watchEpisodeDetailSaga() {
    yield takeLatest(actionTypes.EPISODE_DETAIL_REQUESTED, episodeDetailSaga);
}
