import React from 'react';
import {shallow} from 'enzyme';
import CommentBox from 'Container/CommentBox';
import App from 'App';

it('renders without crashing', () => {
  
  const wrapped = shallow(<App/>);
  expect(wrapped.find(CommentBox).length).toEqual(1);
  //expect(wrapped.find(CakeContainer).length).toEqual(1);
});
