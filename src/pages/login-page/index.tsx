import { Button, Stack } from '@mui/material';
import { TextInput, PasswordInput } from './ui';
import { useLoginPage } from './useLoginPage';

export const LoginPage = () => {
  const { handleChange, handleSubmit, values, touched, errors } =
    useLoginPage();

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '40%', display: 'flex', justifyContent: 'center' }}
    >
      <Stack justifyContent='center' alignItems='center' width='50%'>
        <TextInput
          value={values.email}
          fieldName='email'
          labelName='e-mail'
          title='enter your email'
          error={errors.email || ''}
          hasError={!!(errors.email && touched.email)}
          changeFn={handleChange}
          required
        />
        <PasswordInput
          value={values.password}
          fieldName='password'
          labelName='Пароль'
          title='A-Z a-z 0-9 , ! ; _ - @ $'
          error={errors.password || ''}
          hasError={!!(errors.password && touched.password)}
          changeFn={handleChange}
          required
        />
        <Button variant='contained' type='submit'>
          Login
        </Button>
      </Stack>
    </form>
  );
};
