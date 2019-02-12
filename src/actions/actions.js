import * as actionTypes from './action.constant'

export const addMove = (move) => ({
    type: actionTypes.ADD_MOVE,
    payload: move
})

export const updatePosition = (updatedValue) => ({
    type: actionTypes.UPDATE_BOARD_POSITION,
    payload: updatedValue
})

export const updateTotalMoves = (totalMoves) => ({
    type: actionTypes.UPDATE_TOTAL_MOVES,
    payload: totalMoves
})

export const undoMove = () => ({
    type: actionTypes.UNDO_MOVE
})

export const redoMove = () => ({
    type: actionTypes.REDO_MOVE
})