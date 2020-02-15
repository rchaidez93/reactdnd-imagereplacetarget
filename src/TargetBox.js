import React from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'


const style = {
  border: '1px solid gray',
  height: '15rem',
  width: '15rem',
  // padding: '2rem',
  textAlign: 'center',
}

const imgstyle = {
  height: '100%',
  width: '100%'
}


const TargetBox = props => {

  const { onDrop, image } = props

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(item, monitor) {
      if (onDrop) {
        onDrop(props, monitor)
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver
  const img = (image !== null) ? window.URL.createObjectURL(new Blob(image)) : image; 
  
  return (
    <div ref={drop} style={style}>
      {isActive 
        ? 'Release to drop'
        : (image!==null) 
          ? <img style={imgstyle} src={img} alt="img" />
          : 'Drag file here'}
    </div>
  )
}


export default TargetBox