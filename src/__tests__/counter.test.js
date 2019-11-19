import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';


Enzyme.configure({ adapter: new Adapter() });

describe('Testing our Counter Component - has State of 0 with Load.', () => {
  it ('Counter state is initially 0', () => {
    let app = mount(<Counter />);
    let button = app.find('button');
    expect(app.state('count')).toBe(0);
  });

  it('Simulate a button click - has State of 1.', () => {
    let app = mount(<Counter />); //this mount is a like a 'refresh' it renders it fresh.
    let button = app.find('.up');
    button.simulate('click');
    expect(app.state('count')).toBe(1);
  });

  //Snapshot data
  it('Renders correctly', () => {
    const renderTree = Renderer.create(<Counter />).toJSON(); //snapshot library created rendertree
    expect(renderTree).toMatchSnapshot();
  })

});