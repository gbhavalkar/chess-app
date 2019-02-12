import * as actionTypes from './action.constant'
import { createAction } from 'redux-starter-kit'

/**
 * * Add the new objects in the positions array for changed position keys
 * * Update the object for that position in chessboard reducer reflecting its new value
 * Also increments the current move and total moves values in the reducer
 * The new value i.e chess piece is added as well the move which updated it is stored with it
 * This is required for undoing and redoing i.e to identify whether the reverted move caused this position
 * to update
 *  ! Multiple position keys can be updated with one move if a move eliminates opponents chess piece
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
 * This is done by identifying the position object for the current move in the move history reducer
 */
export const undoMove = createAction ( actionTypes.UNDO_MOVE )

/**
 * * Update all the position objects in the chess board to reflect the new state of the chessboard 
 * * with respect to the current move
 * This is done by identifying the position object for the current move in the move history reducer
 */
export const redoMove = createAction ( actionTypes.REDO_MOVE )
