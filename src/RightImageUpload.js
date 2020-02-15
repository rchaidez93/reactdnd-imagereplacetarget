import React, { useContext } from 'react';
import FileUpload from './FileUpload';
import { ImageContext } from './context/imagecontext';

const RightImageUpload = () => {
    
    const imageContext = useContext(ImageContext);
    const {state} = imageContext;

    return(
        <div style={{float:'left'}}>
            <FileUpload 
                image={state.right}
                position={"RIGHT"}
            />
        </div>
    );
};

export default RightImageUpload;