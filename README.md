This project uses react-dnd to use drop targets for file uploads. Once you drop or upload a file, the target dropzone will get replaced with the image you dropped.

Using useContext with useReducer hooks to manage the images state.

## ImageContext provider using the imagereducer below
```
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
```
The ImageContext consumers for state are components `LeftImageUpload`, `MiddleImageUpload`, and `RightImageUpload`. Each component passes down the corresponding image to `FileUpload` component that is also the ImageContext consumer and gets the dispatch method from the ImageReducer.

## ImageReducer
```
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

```

## Screenshots
![Screenshot1](/src/images/Capture1.PNG)
![Screenshot2](/src/images/Capture2.PNG)
![Screenshot2](/src/images/Capture3.PNG)

## Available Scripts

Once you clone this repo, you can:

### `npm install`

### `npm start`

**Dependecies**
- create-react-app
- react-dnd
- react-dnd-html5-backend