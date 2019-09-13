import React from 'react'
import BoardCell from './BoardCell'

describe('BoardCell Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<BoardCell xPosition="0" yPosition="0"/>)
        expect(wrapper).toMatchSnapshot()
    })

    it('render the styled Cell', () => {
        const wrapper = shallow(<BoardCell xPosition="0" yPosition="0"/>)
        expect(wrapper.find('Cell')).toMatchSnapshot()
    })

    it('renders the comma separated position string', () => {
        const wrapper = shallow(<BoardCell xPosition="0" yPosition="0"/>)
        expect(wrapper.find('Cell').children().text()).toEqual("0,0")
    })
})