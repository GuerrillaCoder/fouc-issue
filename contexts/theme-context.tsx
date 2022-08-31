import * as React from 'react';
import { createContext, useContext, useState } from 'react';


export interface ThemeBreakpoints
{
    extraSmall : string,
    small: string,
    medium: string,
    large: string,
    extraLarge: string
}
export interface ThemeSettings
{
    breakpoint : ThemeBreakpoints,
    darkBg: string,
    lightBg: string,
    ctaButton: string,
    ctaHighlight: string,
    ctaButtonHover: string,
    ctaHighlightHover: string,
    darkTitle: string,
    text: string,
    maxWidth: string
}

export interface ThemePropsOptional
{
    theme?: ThemeSettings
}

export interface ThemePropsRequired
{
    theme: ThemeSettings
}

interface ThemeContextInterface
{
    currentTheme : ThemeSettings,
    setCurrentTheme(theme : ThemeSettings) : void
}

const defaultTheme : ThemeSettings = {
    breakpoint: {
        extraSmall : "(min-width: 320px)",
        small: "(min-width: 576px)",
        medium: "(min-width: 768px)",
        large: "(min-width: 992px)",
        extraLarge: "(min-width: 1200px)"
    },
    darkBg: "#012B3C",
    lightBg: "#F4F7FA",
    ctaButton: "#F67600",
    ctaButtonHover: "#F6DE00",
    ctaHighlight: "#683200",
    ctaHighlightHover: "#476800",
    darkTitle: "#012B3C",
    text: "#474747",
    maxWidth: "1200px"
}

const ThemeContext = createContext<ThemeContextInterface>({
    currentTheme: defaultTheme,
    setCurrentTheme: () => { }
})

export const ThemeProvider = (props : any) => {

    const [currentTheme, setCurrentTheme] = useState<ThemeSettings>(defaultTheme);

    return (
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}} {...props} />
    )
}

export const useTheme = () => useContext(ThemeContext);
