import React, {Component} from 'react'
import styled from 'styled-components'

const Cell = styled.div`
    border: black 2px solid;
    background-color: white;
    text-align: center;
    height: 4em;
`

Cell.displayName = "Cell"

class BoardCell extends Component{
    render(){
        return <Cell>{this.props.xPosition + ',' + this.props.yPosition}</Cell>
    }
}

export default BoardCell;