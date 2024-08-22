import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

forwardRef.propTypes = {
    type: PropTypes.oneOf(["text", "password", "email", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.string,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default forwardRef(function TextInput(
    {
        type = "text",
        name,
        value,
        defaultValue,
        className = "",
        variant = "primary",
        autoComplete,
        required,
        isFocused = false,
        handleChange,
        placeholder,
        isError,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            defaultValue={defaultValue}
            type={type}
            name={name}
            value={value}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
        />
    );
});
