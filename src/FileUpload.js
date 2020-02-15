import React, { useCallback, useContext } from 'react';
import TargetBox from './TargetBox';
import { ImageContext } from './context/imagecontext';


const FileUpload = ({image,position}) => {
    const imageContext = useContext(ImageContext);
    const {dispatch} = imageContext;

    const handleFileDrop = useCallback((item, monitor) => {
        if(monitor){
            const files = monitor.getItem().files;
            dispatch({type: position, payload: files});
        }
    }, [dispatch,position]);

    return (
        <div>
            <TargetBox onDrop={handleFileDrop} image={image} />
        </div>
    );
};

export default FileUpload;