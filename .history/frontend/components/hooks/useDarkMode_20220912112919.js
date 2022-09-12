import { useState } from "react"

export const useDarkMode = (intitalValue) => {
    const [darkMode, setDarkMode] = useState(intitalValue)

    const updateMode = (newValue) => {
        setValue(newValue)
    }
    return[darkMode, setDarkMode];
}