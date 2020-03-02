export const actionTypes = {
    TV_SHOW_REQUESTED: 'TV_SHOW_REQUESTED',
    TV_SHOW_SUCCEEDED: 'TV_SHOW_SUCCEEDED',
    TV_SHOW_FAILED: 'TV_SHOW_FAILED',
    EPISODES_REQUESTED: 'EPISODES_REQUESTED',
    EPISODES_SUCCEEDED: 'EPISODES_SUCCEEDED',
    EPISODES_FAILED: 'EPISODES_FAILED',
};

export const tvShowsRequested = () => {
    return { type: actionTypes.TV_SHOW_REQUESTED }
};

export const tvShowSucceeded = ({ data }) => {
    return {
        type: actionTypes.TV_SHOW_SUCCEEDED,
        payload: {
            data,
            isFetching: false,
            isFailed: false,
        }
    }
};

export const tvShowFailed = () => {
    return { type: actionTypes.TV_SHOW_FAILED }
};

export const episodesListRequested = () => {
    return { type: actionTypes.EPISODES_REQUESTED }
};

export const episodesListSucceeded = ({ data }) => {
    return {
        type: actionTypes.EPISODES_SUCCEEDED,
        payload: {
            episodesList: data,
            isFetching: false,
            isFailed: false,
        }
    }
};

export const episodesListFailed = () => {
    return { type: actionTypes.EPISODES_FAILED }
};
