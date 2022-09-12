 import { useState } from "react"
 
 export const useLocalStorage = (key, intitalValue) =>{
        const [storedValue, setStoredValue] = useState(()=>{
                if(localStorage.getItem(key)){
                    return JSON.parse(window.localStorage.getItem(key))
                }
                localStorage.setItem(key, JSON.stringify(intitalValue))
                return intitalValue
        })
        const setValue = value => {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        return [storedValue, setValue]
 }