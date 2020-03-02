export const actionTypes = {
    EPISODE_DETAIL_REQUESTED: 'EPISODE_DETAIL_REQUESTED',
    EPISODE_DETAIL_SUCCEEDED: 'EPISODE_DETAIL_SUCCEEDED',
    EPISODE_DETAIL_FAILED: 'EPISODE_DETAIL_FAILED',
};

export const episodeDetailRequested = id => {
    return {
        id,
        type: actionTypes.EPISODE_DETAIL_REQUESTED
    }
};

export const episodeDetailSucceeded = ({ data }) => {
    return {
        type: actionTypes.EPISODE_DETAIL_SUCCEEDED,
        payload: {
            data,
            isFetching: false,
            isFailed: false,
        },
    }
};

export const episodeDetailFailed = () => {
    return { type: actionTypes.EPISODE_DETAIL_FAILED }
};
