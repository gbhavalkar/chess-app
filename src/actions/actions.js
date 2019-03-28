import * as actionTypes from './action.constant'
import { createAction } from 'redux-starter-kit'

/**
 * * Updates the positions in the chessBoard reducer
 * * Updates the captured pieces in the reducer if captured
 * @param payload: { fromPosition, toPosition, Object to be modified in the toPosition}
*/
export const addMove = createAction( actionTypes.ADD_MOVE )

/**
 * * Update the total number of moves performed by the players
 */
export const updateTotalMoves = createAction(  actionTypes.UPDATE_TOTAL_MOVES )

/**
 * * Update the current move 
 */
export const updateCurrentMove = createAction( actionTypes.UPDATE_CURRENT_MOVE )

/**
 * * Update all the position objects in the chess board to reflect the previous state of the chessboard
 */
export const undoMove = createAction ( actionTypes.UNDO_MOVE )

/**
 * * Update all the position objects in the chess board to reflect the new state of the chessboard 
 * * with respect to the current move
 */
export const redoMove = createAction ( actionTypes.REDO_MOVE )
