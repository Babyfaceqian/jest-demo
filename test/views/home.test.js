import React from 'react';
import Home from '../../containers/Home';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from '../../createStore';
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';
test('render', () => {
    const component = renderer.create(
        <Provider store={store}>
        <Home />
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('shallow', () => {
    const HomeMount = mount(<Provider store={store}><Home /></Provider>);
    console.log('HomeMount', HomeMount.find('span'))
    expect(HomeMount.find('span').text()).toEqual('');
    HomeMount.find('button').simulate('click');
    expect(HomeMount.find('span').text()).toEqual('yes')
    
    
})