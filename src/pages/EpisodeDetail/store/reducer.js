import { actionTypes } from './actions';

export const initState = {
    data: {
        title: null,
        summary: null,
    },
    isFetching: false,
    isFailed: false,
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.EPISODE_DETAIL_SUCCEEDED:
        return  {...state, ...action.payload};
        case actionTypes.EPISODE_DETAIL_REQUESTED:
        return  {...state, isFetching: true};
        case actionTypes.EPISODE_DETAIL_FAILED:
        return  {...state, isFailed: true, isFetching: false };
    default:
        return state;
    }
};
