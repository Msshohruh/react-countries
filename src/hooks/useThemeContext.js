import { useReducer, createContext } from "react";

export const ThemeContext = createContext();

const changeTheme = (state, action) => {
       switch(action.type){
        case 'CHANGE_THEME':
            return {...state, mode: action.payload}

            default:
                return state
       }
}

export default function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(changeTheme, {mode: 'light'})

    const changeMode = (mode) => {
        dispatch({type: "CHANGE_THEME", payload: mode})
    }
  return (
    <ThemeContext.Provider value={{...state, changeMode}}>
      {children}
    </ThemeContext.Provider>
  );
}
