import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '@shared/services';
import { initialValues, validationSchema } from './config';

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || '/';

  const { user, signIn } = useContext(auth.AuthProvider);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ email, password }) => {
      signIn(email, password);
    },
  });
  const { handleSubmit, values, handleChange } = formik;

  useEffect(() => {
    if (user) {
      navigate(fromPage);
    }
  }, [user]);

  return (
    <div>
      {user || 'out of user'}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          value={values.email}
          onChange={handleChange}
          name='email'
          autoComplete='current-email'
        />
        <input
          type='password'
          value={values.password}
          onChange={handleChange}
          name='password'
          autoComplete='current-password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
