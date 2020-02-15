import React, { useContext } from 'react';
import FileUpload from './FileUpload';
import { ImageContext } from './context/imagecontext';

const LeftImageUpload = () => {
    const imageContext = useContext(ImageContext);
    const {state} = imageContext;

    return(
        <div style={{float:'left'}}>
            <FileUpload 
                image={state.left}
                position={"LEFT"}
            />
        </div>
    );
};

export default LeftImageUpload;