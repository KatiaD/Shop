import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Input, ConfirmButton } from 'components/controls';
import { UserInfoWrap, UserInfoForm } from './UserForm.styled';

const validate = values => {
  const errors = {}
  if (values.get("Username") ) {
    if (values.get("Username").length > 15) {
      errors.Username = 'Must be 15 characters or less'
    }
  }

  if (values.email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
  }
  if (values.age) {
    if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    }
  }  else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
    {console.log("IMMUTABLE INPUT", input)}
      <Input {...input} required placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SyncValidationForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <UserInfoWrap>
      <h3>Please fill out the form</h3>
      <UserInfoForm onSubmit={handleSubmit}>
        <Field
          name="name"
          type="text"
          component={renderField}
          placeholder="Username"
        />
        <Field name="email" type="email" component={renderField} placeholder="Email" />
        <Field name="age" type="number" component={renderField}  placeholder="Age" />
        <div>
          <ConfirmButton type="submit" disabled={submitting}>
            Submit
          </ConfirmButton>
        </div>
      </UserInfoForm>
    </UserInfoWrap>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  destroyOnUnmount: false,

  warn // <--- warning function given to redux-form
})(SyncValidationForm)
