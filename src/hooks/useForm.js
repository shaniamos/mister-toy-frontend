import { useEffect, useState } from "react"

export const useForm = (initialState, callBack) => {

    const [fields, setFields] = useState(initialState)

    useEffect(() => {
        if (callBack) callBack(fields)
    }, [fields])

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        console.log(value)
        switch (target.type) {
            case 'number':
            case 'range':
                value = +target.value || ''
                break;
            case 'checkbox':
                value = target.checked
                break;
            case 'date':
                value = new Date(value)
                break;
            case 'time':
                const newDate = new Date()
                const hours = value.split(':')[0]
                const minutes = value.split(':')[1]
                newDate.setHours(hours)
                newDate.setMinutes(minutes)
                value = newDate
                break
            case 'select':
                console.log('hi')
                const selectedValues = [...field.options]
                     .filter(x => x.selected)
                     .map(x => x.value);
                     console.log(selectedValues)
                break

            default:
                break
        }
        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }

    return [fields, handleChange, setFields]
}