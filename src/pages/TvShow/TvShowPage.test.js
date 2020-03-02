import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TvShowPage } from './TvShowPage';

jest.mock('../../components/EpisodesList', () => {
    return () => 'Episode list';
});

describe('TvShowPage Component', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            data: {
                name: null,
                image: {
                    original: '#'
                },
                summary: null,
            },
            episodesList: [],
            isFetching: false,
            fetchTvShows: jest.fn(),
            fetchEpisodesList: jest.fn(),
        };
        wrapper = shallow(<TvShowPage {...props} />);
    });

    it('should renders correctly with empty data', () => {
        const wrapper = mount(<TvShowPage {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should renders correctly fetching state', () => {
        wrapper.setProps(
            {
                isFetching: true,
            }
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should renders correctly with filled data', () => {
        wrapper.setProps(
            {
                data: {
                    name: 'Test name',
                    image: {
                        original: 'url'
                    },
                    summary: 'Test Summary',
                },
                episodesList: [
                    {
                        id: 0,
                        name: 'Test E name 0'
                    },
                    {
                        id: 1,
                        name: 'Test E name 1'
                    },
                ],
                isFetching: false,
                fetchTvShows: jest.fn(),
                fetchEpisodesList: jest.fn(),
            }
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
