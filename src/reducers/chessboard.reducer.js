import { createReducer } from 'redux-starter-kit'
import * as actions from '../actions/actions'
import getInitialState from '../util/initialState'
// Setting the initial state supplied to the chess board
const initialState = getInitialState();
/**
 * * Reducer containing state of the chessboard maintaining the properties describing 
 * * the value a position on the chessboard holds 
 * The createReducer uses "immer" which lets you write code that "mutates" some data, 
 * but actually applies the updates immutably. 
 * This makes it effectively impossible to accidentally mutate state in a reducer.
 * TODO: Maintaining an UNDO & REDO history
 */
const chessBoardReducer = createReducer( initialState, {
    [actions.addMove] : ( state, action ) => {
        //Update the Total moves
        state.totalMoves = state.totalMoves + 1

        //Update the current move
        state.currentMove = state.totalMoves

        const updatedPositions = action.payload
        Object.keys( updatedPositions ).map( position => {
            // Update the chess board positions affected by a players move
            state.chessBoard[position] = {
                affectedMove: state.currentMove,
                currentIndexInPositionsArray: state.chessBoard[position] 
                                                ? state.chessBoard[position].currentIndexInPositionsArray + 1
                                                : 0
            }
            const newPositionObject = {
                value: updatedPositions[position].value,
                house: updatedPositions[position].house
            }
            // Add the new object for the position in the positions array 
            if( state.positions[position] ){
                state.positions[position].push(newPositionObject)
            }else{
                state.positions[position] = [newPositionObject]
            }
        })
    }
})