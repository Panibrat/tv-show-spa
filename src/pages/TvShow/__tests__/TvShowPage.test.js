import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TvShowPage } from '../TvShowPage';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
    data: {
        name: 'Name',
        image: {
            original: '#'
        },
        summary: 'Summary',
    },
    episodesList: [],
    isFetching: false,
    tvShowsRequested: jest.fn(),
    episodesListRequested: jest.fn(),
}

describe('TvShowPage Component', () => {
    it('should renders without crashing', () => {
        shallow(<TvShowPage {...props} />);
    });

    it('should renders correctly', () => {
        const wrapper = mount(<TvShowPage {...props} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
