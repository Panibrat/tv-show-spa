import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export const EpisodesList = (props) => {
    const {episodesList} = props;
    return (
        <div className={styles.container}>
            {
                episodesList && episodesList.length > 0
                    ?
                    episodesList.map((episode) => {
                        return (
                            <Link key={episode.id} to={`/episode/${episode.id}`} className={styles.link}>
                                <div className={styles.text}>{episode.name}</div>
                            </Link>
                        )
                    })
                    :
                    <h1>No episodes yet...</h1>
            }
        </div>
    )
};
