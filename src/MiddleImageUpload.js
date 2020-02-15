import React, { useContext } from 'react';
import FileUpload from './FileUpload';
import { ImageContext } from './context/imagecontext';

const MiddleImageUpload = () => {
    const imageContext = useContext(ImageContext);
    const {state} = imageContext;

    return(
        <div style={{float:'left'}}>
            <FileUpload
                image={state.middle}
                position={"MIDDLE"}
            />
        </div>
    );
};

export default MiddleImageUpload;