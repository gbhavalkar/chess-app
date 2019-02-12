// Setting the initial state supplied to the chess board
const initialState = {
}

/**
 * * Reducer containing state of the chessboard maintaining the properties describing 
 * * the value a position on the chessboard holds 
 * TODO: Maintaining an UNDO & REDO history
 */
export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};