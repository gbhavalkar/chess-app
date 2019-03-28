import * as actionTypes from './action.constant'
import * as actions from './actions'
import ChessBoardPieces, {Houses} from '../constants/ChessBoard.constants'
describe('actions', () => {
    it('should create an action to add a move', () => {
        const newMoveObject = {            
            from: '1,1',
            to: '1,7',
            newPositionObject: {
                value: ChessBoardPieces.ROOK,
                house: Houses.BLACK
            }
        }
        const expectedAction = {
            type: actionTypes.ADD_MOVE,
            payload: newMoveObject
        }
        expect(actions.addMove(newMoveObject)).toEqual(expectedAction)
    })

    it('should create an action to update the current move', () => {
        const currentmove = 25
        const expectedAction = {
            type: actionTypes.UPDATE_CURRENT_MOVE,
            payload: currentmove
        }
        expect(actions.updateCurrentMove(currentmove)).toEqual(expectedAction)
    })

    it('should create an action to undo move', () => {
        const moveToUndo = 25
        const expectedAction = {
            type: actionTypes.UNDO_MOVE,
            payload: moveToUndo
        }
        expect(actions.undoMove(moveToUndo)).toEqual(expectedAction)
    })

    it('should create an action to redo move', () => {
        const moveToRedo = 25
        const expectedAction = {
            type: actionTypes.REDO_MOVE,
            payload: moveToRedo
        }
        expect(actions.redoMove(moveToRedo)).toEqual(expectedAction)
    })
})