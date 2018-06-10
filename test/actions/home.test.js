import React from 'react';
import * as actions from '../../actions/home';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';
const {
    changeState
} = actions;

test('changeState', () => {
    const a = { a: 'a'};
    expect(changeState(a)).toEqual({type: "CHANGE_STATE", payload: a});
});
