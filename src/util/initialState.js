import ChessBoardPieces, {Houses} from '../constants/ChessBoard.constants'
/**
 * Method to return the Chess Board initial state object
 */
const getInitialState = () => {
    let initialState = {}
    //Setting the total move and current move as 0
    initialState['totalMoves'] = 0
    initialState['currentMove'] = 0
    //Setting the chessBoard as an empty object as no moves have been added
    initialState['chessBoard'] = {}
    //positions key in the reducer containing array of objects 
    //that track of all the values occuring on that position on chess board
    let positions = {}
    for( let yIndex = 1; yIndex <= 8; yIndex++){
        for( let xIndex = 1; xIndex <= 8; xIndex++){
            let position = [xIndex, yIndex].join(',')
            switch(yIndex){
                case 2: positions[position] = getBlackHouseObject( ChessBoardPieces.PAWN ) 
                break;
                case 7: positions[position] = getWhiteHouseObject( ChessBoardPieces.PAWN ) 
                break;
                case 1: positions[position] = getBlackHouseObject( boardPositionMap[xIndex] ) 
                break;
                case 8: positions[position] = getWhiteHouseObject( boardPositionMap[xIndex] )
                break;
            }
        }
    }
    //setting the positions array in the initial state
    initialState['chessBoard'] = positions
    initialState['capturedPieces'] = {
        [Houses.WHITE]: [],
        [Houses.BLACK]: []
    }
    return initialState
}

/**
 * Function to return the position object defining the Chess Board piece
 * @param {*} house Black/White
 * @param {*} value Chess Board Piece
 */
const getPositionValueObject = (house, value) =>({
    value,
    house
})

const getWhiteHouseObject = getPositionValueObject.bind(null, Houses.WHITE)
const getBlackHouseObject = getPositionValueObject.bind(null, Houses.BLACK)

export const boardPositionMap = {
    1: ChessBoardPieces.ROOK,
    2: ChessBoardPieces.KNIGHT,
    3: ChessBoardPieces.BISHOP,
    4: ChessBoardPieces.QUEEN,
    5: ChessBoardPieces.KING,
    6: ChessBoardPieces.ROOK,
    7: ChessBoardPieces.KNIGHT,
    8: ChessBoardPieces.BISHOP,
}

export default getInitialState;