import React from 'react'
import ChessBoard from './ChessBoard'

describe('ChessBoard Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<ChessBoard />)
        expect(wrapper).toMatchSnapshot()
    })

    it('renders the styled ChessBoard', () => {
        const wrapper = shallow(<ChessBoard/>)
        expect(wrapper.find('ChessBoard')).toMatchSnapshot()
    })

    it('renders 8 rows', () => {
        const wrapper = mount(<ChessBoard />)
        expect(wrapper.find('ChessBoardRow')).toHaveLength(8)
    })

    it('one row renders 8 cells', () => {
        const wrapper = mount(<ChessBoard />)
        wrapper.find('ChessBoardRow').map( ChessBoardRow => {
            expect(ChessBoardRow.find('ChessBoardCell')).toHaveLength(8)
        })
    })
})
