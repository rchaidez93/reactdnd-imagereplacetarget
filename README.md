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


## Available Scripts

Once you clone this repo, you can:

### `npm install`

### `npm start`

**Dependecies**
- create-react-app
- react-dnd
- react-dnd-html5-backend