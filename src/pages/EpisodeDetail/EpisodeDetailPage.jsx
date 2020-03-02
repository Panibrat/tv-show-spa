import React, { Component } from 'react';
import styles from './styles.module.css';

export class EpisodeDetailPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        const { fetchEpisodeDetails } = this.props;
        fetchEpisodeDetails(id);
    }

    render() {
        const { data, isFetching } = this.props;

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
                <div className={styles.content}>
                    <div className={styles.coverImage}>
                        <img src={ data && data.image && data.image.original ? data.image.original : '#' }
                             alt={ data.name }
                        />
                    </div>
                    <div className={ styles.info }>
                        <div className={ styles.description }>
                            <h3>Summary</h3>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: data.summary
                                }}>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
