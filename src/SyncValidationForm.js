import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { render } from 'react-dom'
const validate = values => {
    console.log("validate")
    console.log(values)
    console.log("validate")
    const errors={}
    if (!values.userName) {
        errors.userName = 'Required'
    } else if (values.userName.length > 15) {
        errors.userName = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}
const warn = values => {
    console.log("wan")
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}
const renderField = ({input, label, type, meta: {touched, warning, error }}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder ={label} type ={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const SyncValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting} = props
    console.log("syncValidatrionFoem")
    console.log(props)
    console.log(pristine,reset,submitting)
    console.log("syncValidatrionFoem")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field name ="userName" component={renderField} type="text" label="User Name" />
                <Field name ="email" component={renderField} type="email" label="Email" />
                <Field name ="age" component={renderField} type="number" label="Age" />
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button onClick={reset} disabled={pristine || submitting}>Clear</button>
                </div>
            </form>
        </div>
    )}

export default reduxForm({
    form:'syncValidation' ,
    validate,
    warn
})(SyncValidationForm)
