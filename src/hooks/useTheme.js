import { useContext } from "react";
import { ThemeContext } from "./useThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context)  {
        throw new Error('Please, useTheme() must  in the ThemeProvider()')
    }
    
    return context
}