import React from 'react';
import { shallow } from 'enzyme';

import Master from './Master';

const testProps = { children: '', total: 50, title: 'title' },

describe('Given the Master component', () => {
	describe( 'when the component is rendered', () => {
		let component;

		beforeEach(() => {
			component = shallow(
				<Master { ...testProps }>
					<div>Page</div>
				</Master>
			);
		});

		it('should match the snapshot', () => {
			expect(component).toMatchSnapshot();
    });
  });
});
