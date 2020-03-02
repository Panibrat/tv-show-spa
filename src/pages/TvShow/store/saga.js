import { put, takeLatest, call} from 'redux-saga/effects';

import { actionTypes, tvShowSucceeded, tvShowFailed, episodesListSucceeded, episodesListFailed} from './actions';
import { getApiRequest, getEpisodesApiRequest } from '../service/api.service';


export function* tvShowSaga() {
    try {
        const { data } = yield call(getApiRequest);
        yield put(tvShowSucceeded({ data }));

    } catch (e) {
        yield put(tvShowFailed());
    }
}

export function* episodesListSaga() {
    try {
        const { data } = yield call(getEpisodesApiRequest);
        yield put(episodesListSucceeded({ data }));

    } catch (e) {
        yield put(episodesListFailed());
    }
}

export function* watchTvShowSaga() {
    yield takeLatest(actionTypes.TV_SHOW_REQUESTED, tvShowSaga);
}

export function* watchEpisodesListSaga() {
    yield takeLatest(actionTypes.EPISODES_REQUESTED, episodesListSaga);
}
