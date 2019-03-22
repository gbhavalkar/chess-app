import getInitialState, {boardPositionMap} from './initialState'
import ChessBoardPieces, {Houses} from '../constants/ChessBoard.constants'

describe('initial state for chess board reducer', () => {
    let mockInitialState;

    //get the initial state object
    beforeEach(() => {
        mockInitialState = getInitialState()
    })

    it('should be defined', () => {
        expect(mockInitialState).toBeDefined()
    })

    it('total moves should be zero', () => {
        expect(mockInitialState.totalMoves).toEqual(0)
    })

    it('current move should be zero', () => {
        expect(mockInitialState.totalMoves).toEqual(0)
    })

    it('chessBoard object should be defined', () => {
        expect(mockInitialState.chessBoard).toBeDefined()
    })

    it('chessBoard object should be empty', () => {
        expect(mockInitialState.chessBoard).toStrictEqual({})
    })

    it('the second row should be pawns of house Black', () => {
        //get the second row keys
        const keysToMatch = Object.keys(mockInitialState.positions).filter( positionKey => positionKey.split(',')[1] === '2')
        const expectedStateObject = [{
            value: ChessBoardPieces.PAWN,
            house: Houses.BLACK
        }]
        keysToMatch.map( keyToMatch => {
            expect(mockInitialState.positions[keyToMatch]).toEqual(expectedStateObject)
        })
    })

    it('the second last row should be pawns of house White', () => {
        //get the second last row keys
        const keysToMatch = Object.keys(mockInitialState.positions).filter( positionKey => positionKey.split(',')[1] === '7')
        const expectedStateObject = [{
            value: ChessBoardPieces.PAWN,
            house: Houses.WHITE
        }]
        keysToMatch.map( keyToMatch => {
            expect(mockInitialState.positions[keyToMatch]).toEqual(expectedStateObject)
        })
    })

    it('the first row should match with values of `boardPositionMap` of house Black', () => {
        //get the first row keys
        const keysToMatch = Object.keys(mockInitialState.positions).filter( positionKey => positionKey.split(',')[1] === '1')
        keysToMatch.map( keyToMatch => {
            const xPosition = keyToMatch.split(',')[0]
            const expectedStateObject = [{
                value: boardPositionMap[xPosition],
                house: Houses.BLACK
            }]
            expect(mockInitialState.positions[keyToMatch]).toEqual(expectedStateObject)
        })
    })

    it('the last row should match with values of `boardPositionMap` of house White', () => {
        //get the first row keys
        const keysToMatch = Object.keys(mockInitialState.positions).filter( positionKey => positionKey.split(',')[1] === '8')
        keysToMatch.map( keyToMatch => {
            const xPosition = keyToMatch.split(',')[0]
            const expectedStateObject = [{
                value: boardPositionMap[xPosition],
                house: Houses.WHITE
            }]
            expect(mockInitialState.positions[keyToMatch]).toEqual(expectedStateObject)
        })
    })
})