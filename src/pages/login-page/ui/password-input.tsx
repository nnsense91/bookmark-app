import { VisibilityOff, Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { TextInput } from './text-input';
import { InputProps } from './types';

const ShowPasswordIcon: FC<{
  show: boolean;
  toggle: () => void;
}> = ({ show, toggle }) => (
  <IconButton
    size='small'
    aria-label='toggle-password-visibility'
    onClick={toggle}
  >
    {show ? <VisibilityOff /> : <Visibility />}
  </IconButton>
);

export const PasswordInput: FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <TextInput
      {...props}
      type={showPassword ? 'text' : 'password'}
      endIcon={
        <ShowPasswordIcon show={showPassword} toggle={toggleShowPassword} />
      }
    />
  );
};
