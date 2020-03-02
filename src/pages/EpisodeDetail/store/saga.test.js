import { testSaga } from 'redux-saga-test-plan';
import { episodeDetailSaga, watchEpisodeDetailSaga} from "./saga";
import { actionTypes, episodeDetailSucceeded, episodeDetailFailed } from "./actions";
import { getEpisodeDetailsApiRequest } from "../../../services/api.service";

describe('episodeDetailSaga', () => {
    it('should wait for a episode details request', () => {
        testSaga(watchEpisodeDetailSaga)
            .next()
            .takeLatest(actionTypes.EPISODE_DETAIL_REQUESTED, episodeDetailSaga)
            .next()
            .isDone();
    });

    it('should call a episode details request and put results', () => {
        const resp = {
            data: 'data'
        };
        const params = {
            id: 1
        };
        testSaga(episodeDetailSaga, params)
            .next(params)
            .call(getEpisodeDetailsApiRequest(params))
            .next(resp)
            .put(episodeDetailSucceeded(resp))
            .next()
            .isDone();
    });

    it('should call a episode details request and catch an error', () => {
        const params = {
            id: 1
        };
        testSaga(episodeDetailSaga, params)
            .next(params)
            .call(getEpisodeDetailsApiRequest(params))
            .throw(new Error())
            .put(episodeDetailFailed())
            .next()
            .isDone();
    });
});
