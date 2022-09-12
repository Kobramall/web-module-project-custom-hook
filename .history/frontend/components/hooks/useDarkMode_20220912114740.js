import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (intitalValue) => {
    const [values, setValue] = useLocalStorage(intitalValue)

    return[values, setValue];
}