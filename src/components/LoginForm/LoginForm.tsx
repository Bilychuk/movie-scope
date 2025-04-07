// import { Formik, Form, Field } from 'formik';
// import css from './LoginForm.module.css';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
// import toast from 'react-hot-toast';
// import { Button } from '@mui/material';

// export default function LoginForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(logIn(values))
//       .unwrap()
//       .then(() => toast.success('Success!'))
//       .catch(() => toast.error('Invalid data. Please check!'));
//     actions.resetForm();
//   };
//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//       }}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.form} autoComplete="off">
//         <label className={css.label}>
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label className={css.label}>
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <Button variant="contained" type="submit">
//           Log In
//         </Button>
//       </Form>
//     </Formik>
//   );
// }
import { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Button, Box, Stack, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
});

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('Success!'))
      .catch(() => toast.error('Invalid data. Please check!'));
    actions.resetForm();
  };

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            <Stack spacing={3}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                fullWidth
              />
              <Field
                component={TextField}
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" type="submit" fullWidth>
                Log In
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
