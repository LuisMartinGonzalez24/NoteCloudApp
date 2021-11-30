import { useState } from "react"

export const useForm = <T extends Object> (initialState: T) => {
    
    const [state, setstate] = useState(initialState);
    
    const resetForm = (newFormState = initialState) => {
        setstate(newFormState);
    }

    const onChangeForm = <K extends Object> (field: keyof T, value: K) => {
        setstate({
            ...state,
            [field]: value,
        })
    }

    return {
        formValues: state,
        onChangeForm,
        resetForm
    }
}
