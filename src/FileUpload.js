import React, { useCallback, useState } from 'react';
import TargetBox from './TargetBox';


const FileUpload = () => {

    const [droppedFiles, setDroppedFiles] = useState([]);
    const handleFileDrop = useCallback((item, monitor) => {
        if(monitor){
            const files = monitor.getItem().files;
            setDroppedFiles(files);
        }
    }, []);
    console.log(droppedFiles);
    return (
        <div>
            <TargetBox onDrop={handleFileDrop} />
        </div>
    );
};

export default FileUpload;