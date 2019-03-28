import chessBoardReducer from './chessboard.reducer'
import getInitialState from '../util/initialState'
import ChessBoardPieces, {Houses} from '../constants/ChessBoard.constants'
import * as actions from '../actions/actions'

describe('Chess Board Reducer', () => {

    it('should return the initialState', () => {
        const initialState = getInitialState();
        expect( chessBoardReducer(undefined, {}))
            .toEqual(initialState)
    })
    
    describe('adding a new move', () => {
        it('should delete the current position', () => {
            const newMoveObject = {
                from: '1,1',
                to: '2,1',
                newPositionObject: {
                    value: ChessBoardPieces.ROOK,
                    house: Houses.BLACK
                }
            }
            const newState = chessBoardReducer( undefined, actions.addMove(newMoveObject));
            expect(newState.chessBoard['1,1'])
                .toBeUndefined()
        })

        it('should update the new position', () => {
            const newMoveObject = {
                from: '1,1',
                to: '2,1',
                newPositionObject: {
                    value: ChessBoardPieces.ROOK,
                    house: Houses.BLACK
                }
            }
            const newState = chessBoardReducer( undefined, actions.addMove(newMoveObject));
            expect(newState.chessBoard['2,1'])
                .toEqual(newMoveObject.newPositionObject)
        })

        it('should update the captured piece', () => {
            let initialState = getInitialState()
            //initialState contains white pawn at position 1,7
            const newMoveObject = {
                from: '1,1',
                to: '1,7',
                newPositionObject: {
                    value: ChessBoardPieces.ROOK,
                    house: Houses.BLACK
                }
            }
            const capturedValue = initialState.chessBoard['1,7']
            const newState = chessBoardReducer( undefined, actions.addMove(newMoveObject));
            expect(newState.capturedPieces[Houses.WHITE])
                .toContainEqual(
                    expect.objectContaining(
                        capturedValue
                    )
                )
        })
    })
})