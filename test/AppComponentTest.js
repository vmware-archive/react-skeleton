import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import AppComponent from '../src/AppComponent';

describe('AppComponent', () => {
  it('has a heading', () => {
    const component = shallow(<AppComponent/>);
    expect(component.find('h1').length).toEqual(1)
  })
})
