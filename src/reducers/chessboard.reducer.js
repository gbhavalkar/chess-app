import { createReducer } from 'redux-starter-kit'
import * as actions from '../actions/actions'
import getInitialState from '../util/initialState'

// Setting the initial state supplied to the chess board
const initialState = getInitialState();

/**
 * * Reducer containing state of the chessboard maintaining the properties describing 
 * * the value a position on the chessboard holds 
 * The createReducer uses "immer" which lets you write code that "mutates" some data, 
 * but actually applies the updates immutably by passing a proxy state to the reducer. 
 * This makes it effectively impossible to accidentally mutate state in a reducer.
 * TODO: Maintaining an UNDO & REDO history
 */

const chessBoardReducer = createReducer( initialState, {
    
    //action of adding a move in the game,
    //receives the object containing updated positions (from and to) as the payload
    [actions.addMove] : ( state, action ) => {
        const updatedPositions = action.payload;
        //remove the piece from its current position
        if(state.chessBoard[updatedPositions.from])
            delete state.chessBoard[updatedPositions.from];
        //if the to position has any value present, that value will be captured
        if(state.chessBoard[updatedPositions.to]){
            const capturedValue = state.chessBoard[updatedPositions.to];
            state.capturedPieces[capturedValue.house].push(capturedValue);
        }
        state.chessBoard[updatedPositions.to] = updatedPositions.newPositionObject;
        return state;
    }
})
export default chessBoardReducer;