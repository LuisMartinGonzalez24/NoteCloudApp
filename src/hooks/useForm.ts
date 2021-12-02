import { useState } from "react"

export const useForm = <T extends Object> (initialState: T) => {
    
    const [state, setstate] = useState(initialState);

    const emptyForm = () => setstate(initialState);

    const resetNewFormState = (newFormState = initialState) => {
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
        resetNewFormState,
        emptyForm
    }
}
