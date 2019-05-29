import React from 'react'
import HeaderComponent from './Header'

describe('Header Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<HeaderComponent title="Chess App" />)
        expect(wrapper).toMatchSnapshot()
    })

    it('render the styled Header', () => {
        const wrapper = shallow(<HeaderComponent title="Chess App" />)
        expect(wrapper.find('Header')).toMatchSnapshot()
    })

    it('renders the correct title', () => {
        const wrapper = shallow(<HeaderComponent title="Some App" />)
        expect(wrapper.find('Header').children().text()).toEqual("Some App")
    })
})