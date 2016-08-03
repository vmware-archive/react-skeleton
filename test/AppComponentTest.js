import React from 'react'
import {shallow, mount} from 'enzyme'
import expect from 'expect'
import AppComponent from '../src/AppComponent'

describe('AppComponent', () => {
  it('can be shallow mounted in a test', () => {
    const component = shallow(<AppComponent/>)
    expect(component.find('h1').length).toEqual(1)
  })

  it('can be mounted in a test', () => {
    const component = mount(<AppComponent/>)
    expect(component.find('h1').length).toEqual(1)
  })
})
