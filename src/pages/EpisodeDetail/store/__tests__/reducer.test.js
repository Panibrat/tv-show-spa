import { reducer, initState } from '../reducer';
import { actionTypes } from '../actions';

describe('EpisodeDetail reducer', () => {
    test('should return initial state', () => {
        const action = { type: ''};
        const newState = reducer(undefined, action);

        expect(newState).toEqual(initState);
    });

    test('should return state with isFetching true', () => {
        const action = { type: actionTypes.EPISODE_DETAIL_REQUESTED};
        const newState = reducer(initState, action);

        expect(newState.isFetching).toBe(true);
    });

    test('should return state with isFailed=true isFetching=false', () => {
        const action = { type: actionTypes.EPISODE_DETAIL_FAILED};
        const newState = reducer(initState, action);

        expect(newState.isFailed).toBe(true);
        expect(newState.isFetching).toBe(false);
    });

    test('should return state with fetched data and with isFailed=false isFetching=false', () => {
        const fetchedData = {
            title: 'Title',
            summary: 'Summary',
        };
        const payload = {
            data: fetchedData,
            isFetching: false,
            isFailed: false,
        };
        const action = {
            payload,
            type: actionTypes.EPISODE_DETAIL_SUCCEEDED,
        };
        const newState = reducer(initState, action);

        expect(newState.data).toEqual(fetchedData);
        expect(newState.isFailed).toBe(false);
        expect(newState.isFetching).toBe(false);
    });
});
