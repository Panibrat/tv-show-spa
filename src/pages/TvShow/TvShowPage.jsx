import React, { Component } from 'react';
import styles from './styles.module.css';
import EpisodesList from '../../components/EpisodesList';

export class TvShowPage extends Component {
    componentDidMount() {
        const { fetchTvShows, fetchEpisodesList } = this.props;
        fetchTvShows();
        fetchEpisodesList();
    }

    render() {
        const { data, isFetching, episodesList } = this.props;
        if (isFetching) {
            return (
                <h1>Fetching...</h1>
            )
        }

        return (
            <div className={ styles.container }>
                <div className={ styles.title}>
                    <h1>{ data.name }</h1>
                </div>
                <div className={ styles.content }>
                    <div className={ styles.coverImage }>
                        <img src={ data && data.image && data.image.original ? data.image.original : '#' }
                             alt={ data.name }
                        />
                    </div>
                    <div className={ styles.info }>
                        <div className={ styles.description }>
                            <h3>Description</h3>
                            <span
                                dangerouslySetInnerHTML={{
                                __html: data.summary
                            }}>
                            </span>
                        </div>
                        <div className={ styles.episodesContainer }>
                            <h3>Episodes</h3>
                            <div className={ styles.episodesList }>
                                <EpisodesList episodesList = { episodesList } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
