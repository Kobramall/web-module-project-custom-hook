import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (intitalValue) => {
    const [values, setValue] = useLocalStorage(key, intitalValue)

    const updateMode = (newValue) => {
        setValue(newValue)
    }
    return[darkMode, setDarkMode];
}