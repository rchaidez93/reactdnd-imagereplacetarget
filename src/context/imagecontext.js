import React, { createContext, useReducer } from 'react';
import imagereducer from './imagereducer';


const ImageContext = createContext();

const ImageProvider = ({values,children}) => {
    const [state, dispatch] = useReducer(imagereducer, values);
    
    return(
        <ImageContext.Provider 
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ImageContext.Provider>
    )
};

export default ImageProvider;
export { ImageContext };
