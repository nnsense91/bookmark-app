import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('required field'),
  password: Yup.string().required('required field'),
});

export { initialValues, validationSchema };
