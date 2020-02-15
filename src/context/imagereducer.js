const reducer = (state, action) => {
    
    switch(action.type){
        case 'LEFT':
            return { ...state, left: action.payload };
        case 'MIDDLE':
            return { ...state, middle: action.payload };
        case 'RIGHT':
            return { ...state, right: action.payload };
        default:
            return state;
    }
};

export default reducer;