import React, { Component } from 'react'
import BoardCell from '../BoardCell/BoardCell'
import styled from 'styled-components'

const ChessBoardDiv = styled.div`
    margin-left: 1%;
    margin-top: 2%;
    text-align: center;
    display: grid;
    border-style: double;
    padding: 14px;
    background-color: #4b4f52;
    width: 60%;
`
ChessBoardDiv.displayName = 'ChessBoard'

const ChessBoardCell = styled.div`
    float: left;
    width: 12.5%;
    height: 4em;

`
ChessBoardCell.displayName = 'ChessBoardCell'

const ChessBoardRow = styled.div`
    height: 4em;
`
ChessBoardRow.displayName = 'ChessBoardRow'

class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCell: []
        }
    }

    renderChessBoard = () => {
        const postions = [0, 1, 2, 3, 4, 5, 6, 7]
        return postions.map(xPosition => {
            return (
                <ChessBoardRow key={xPosition}>
                    {postions.map(yPosition =>
                        <ChessBoardCell key={xPosition + "," + yPosition} >
                            <BoardCell
                                xPosition={xPosition}
                                yPosition={yPosition}
                                isSelected={this.state.selectedCell.includes(xPosition + "," + yPosition)}
                            />
                        </ChessBoardCell>
                    )}
                </ChessBoardRow>
            )
        })
    }

    render() {
        return (
            <ChessBoardDiv>
                {this.renderChessBoard()}
            </ChessBoardDiv>
        )
    }
}

export default ChessBoard;