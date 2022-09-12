export default useDarkMode = (intitialBoolean) => {
    const [value, setValue] = useState(intitialBoolean)

    const updateMode = (newValue) => {
        setValue(newValue)
    }
    return[value, updateMode];
}