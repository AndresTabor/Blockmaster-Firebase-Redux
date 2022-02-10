import { useState } from "react";

export const useForm = ( initialState = {}) => {

    const [registro, setRegistro] = useState( initialState );

    const reset = () => {
        setRegistro( initialState );
    }

    const handleFormChange = ( {target} ) => {
        setRegistro({
            ...registro,
            [target.name]: target.value
        })
        console.log( registro );
    }

    return [ registro, handleFormChange, reset ];
}