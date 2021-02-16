import React from 'react'
import PropTypes from 'prop-types'
import { FormItem, FormItemBar, InputField, Label } from './InputStyled'

const Input = ({ register, type, name, label, defaultValue }) => {
  return (
    <FormItem>
      <InputField
        ref={register}
        type={type}
        name={name}
        id={name}
        placeholder=' '
        defaultValue={defaultValue}
      />
      <Label htmlFor={name}>{label}</Label>
      <FormItemBar />
    </FormItem>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input
