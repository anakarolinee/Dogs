import React from "react";

const types = {
    email: {
        regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: 'Preencha um e-mail válido',
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 número. Com no mínimo 8 caracteres.',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números',
    },
}

const useForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);


    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha um valor')
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        error,
    };
}

export default useForm;