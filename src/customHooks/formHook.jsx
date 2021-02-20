import {useState} from 'react';

const FormHook = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const handleChange = ({target}) => {
        setValues({
            ...values,
            [target.id] : target.value,
        });
    }

    const reset = () => {
        setValues(initialState);
    }

    return {
        values,
        handleChange,
        reset,
    }
}

export default FormHook; 