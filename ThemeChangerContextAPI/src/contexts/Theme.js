import { createContext, useContext } from "react";

//This line imports two functions createContext and useContext from the React library. createContext is used to create a Context object, which allows components to share data without explicitly passing props through every level of the component tree. useContext is a React Hook that allows functional components to consume the nearest current value of a Context object.

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//Here, a ThemeContext object is created using the createContext function. The createContext function takes a default value as its argument, which is an object in this case. This default value provides initial values for the themeMode, darkTheme, and lightTheme properties of the context. These properties represent the current theme mode and functions to switch between light and dark themes. By default, the themeMode is set to "light", and the darkTheme and lightTheme functions are empty.

export const ThemeProvider = ThemeContext.Provider

//it just a shortcut

//the constant ThemeProvider is assingned as ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

