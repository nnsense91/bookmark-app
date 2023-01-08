import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '@shared/services';
import { initialValues, validationSchema } from './config';

export const useLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || '/';

  const { userName, signIn } = useContext(auth.AuthProvider);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ email, password }) => {
      signIn(email, password);
    },
  });
  const { handleSubmit, values, handleChange, errors, touched } = formik;

  useEffect(() => {
    if (userName) {
      navigate(fromPage);
    }
  }, [userName]);

  return {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
  };
};
