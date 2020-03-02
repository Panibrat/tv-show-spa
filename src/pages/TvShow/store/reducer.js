import { actionTypes } from './actions';

export const initState = {
    data: {
        name: null,
        summary: null,
    },
    episodesList: [],
    isFetching: false,
    isFailed: false,
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.TV_SHOW_SUCCEEDED:
        return  {...state, ...action.payload};
        case actionTypes.TV_SHOW_REQUESTED:
        return  {...state, isFetching: true};
        case actionTypes.TV_SHOW_FAILED:
        return  {...state, isFailed: true, isFetching: false };
        case actionTypes.EPISODES_SUCCEEDED:
        return  {...state, ...action.payload};
        case actionTypes.EPISODES_REQUESTED:
        return  {...state, isFetching: true};
        case actionTypes.EPISODES_FAILED:
        return  {...state, isFailed: true, isFetching: false };

    default:
        return state;
    }
};
