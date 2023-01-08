import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { FC } from 'react';
import { InputProps } from './types';

export const TextInput: FC<InputProps> = ({
  labelName,
  fieldName,
  value,
  hasError,
  error,
  changeFn,
  title,
  required = false,
  endIcon,
  type = 'text',
}) => {
  return (
    <FormControl
      error={hasError}
      required={required}
      margin='normal'
      fullWidth
      aria-describedby={`${fieldName}-text`}
    >
      <InputLabel variant='standard' htmlFor={fieldName}>
        {labelName}
      </InputLabel>
      <Input
        type={type}
        name={fieldName}
        id={fieldName}
        margin='dense'
        title={title}
        value={value}
        onChange={changeFn}
        autoComplete={fieldName}
        endAdornment={endIcon}
      />
      <FormHelperText id='username-text'>{error}</FormHelperText>
    </FormControl>
  );
};
