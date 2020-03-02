import { connect } from 'react-redux';
import { episodeDetailRequested } from './store/actions';
import {
    selectEpisodeDetailsData,
    selectIsFailedEpisodeDetailsData,
    selectIsFetchingEpisodeDetailsData } from './store/selectors';
import { EpisodeDetailPage } from './EpisodeDetailPage';

const mapStateToProps = store => {
    const data = selectEpisodeDetailsData(store);
    const isFetching = selectIsFetchingEpisodeDetailsData(store);
    const isFailed = selectIsFailedEpisodeDetailsData(store);

    return {
        data,
        isFetching,
        isFailed,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEpisodeDetails: id => dispatch(episodeDetailRequested(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetailPage);
