import * as Yup from 'yup';

interface FormikFieldTypes {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('required field'),
  password: Yup.string().required('required field'),
});

export { initialValues, validationSchema };
