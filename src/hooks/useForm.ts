import { useState } from "react"

export const useForm = <T extends Object> (initialState: T) => {
    
    const [state, setstate] = useState(initialState);
    
    const onChange = <K extends Object> (field: keyof T, value: K) => {
        setstate({
            ...state,
            [field]: value,
        })
    }

    return {
        form: state,
        onChange,
    }
}
