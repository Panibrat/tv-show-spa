import { testSaga } from 'redux-saga-test-plan';
import {episodesListSaga, tvShowSaga, watchEpisodesListSaga, watchTvShowSaga} from "./saga";
import {actionTypes, episodesListFailed, episodesListSucceeded, tvShowFailed, tvShowSucceeded} from "./actions";
import {getEpisodesApiRequest, getTvShowApiRequest} from "../../../services/api.service";

describe('watchTvShowSaga', () => {
    it('should wait for a tv show request', () => {
        testSaga(watchTvShowSaga)
            .next()
            .takeLatest(actionTypes.TV_SHOW_REQUESTED, tvShowSaga)
            .next()
            .isDone();
    });

    it('should call a tv show request and put results', () => {
        const resp = {
            data: 'data'
        };
        testSaga(tvShowSaga)
            .next()
            .call(getTvShowApiRequest)
            .next(resp)
            .put(tvShowSucceeded(resp))
            .next()
            .isDone();
    });

    it('should call a tv show request and catch an error', () => {
        testSaga(tvShowSaga)
            .next()
            .call(getTvShowApiRequest)
            .throw(new Error())
            .put(tvShowFailed())
            .next()
            .isDone();
    });
});

describe('watchEpisodesListSaga', () => {
    it('should wait for a episodes list request', () => {
        testSaga(watchEpisodesListSaga)
            .next()
            .takeLatest(actionTypes.EPISODES_REQUESTED, episodesListSaga)
            .next()
            .isDone();
    });

    it('should call a episodes list request and put results', () => {
        const resp = {
            data: 'episodes'
        };
        testSaga(episodesListSaga)
            .next()
            .call(getEpisodesApiRequest)
            .next(resp)
            .put(episodesListSucceeded(resp))
            .next()
            .isDone();
    });

    it('should call a episodes list request and catch an error', () => {
        testSaga(episodesListSaga)
            .next()
            .call(getEpisodesApiRequest)
            .throw(new Error())
            .put(episodesListFailed())
            .next()
            .isDone();
    });
});
