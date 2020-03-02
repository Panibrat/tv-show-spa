import { connect } from 'react-redux';
import { tvShowsRequested, episodesListRequested } from './store/actions';
import { TvShowPage } from './TvShowPage';
import { selectShowData, selectIsFetchingShowData, selectEpisodesListShowData } from './store/selectors';

const mapStateToProps = (store) => {
    const data = selectShowData(store);
    const episodesList = selectEpisodesListShowData(store);
    const isFetching = selectIsFetchingShowData(store);

    return {
        data,
        isFetching,
        episodesList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTvShows: () => dispatch(tvShowsRequested()),
        fetchEpisodesList: () => dispatch(episodesListRequested()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowPage);
