import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormikProps = () => {
  return (
    <div className='container d-flex justify-content-center'>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <div style={{ width: '30%' }}>
            <form className='col g-4' onSubmit={formik.handleSubmit}>
              <div className='col'>
                <label htmlFor='firstName my-1' className='form-label'>
                  First Name
                </label>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    id='firstName'
                    className={`form-control rounded ${
                      formik.touched.firstName &&
                      formik.errors.firstName &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('firstName')}
                  />
                  <div className='invalid-feedback'>
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
              </div>

              <div className='col my-4'>
                <label htmlFor='lastName' className='form-label'>
                  Last Name
                </label>
                <div className='input-group mb-3 '>
                  <input
                    type='text'
                    id='lastName'
                    className={`form-control rounded ${
                      formik.touched.lastName &&
                      formik.errors.lastName &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('lastName')}
                  />
                  <div className='invalid-feedback'>
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
              </div>
              <div className='col my-4'>
                <label htmlFor='email' className='form-label'>
                  email
                </label>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    id='email'
                    className={`form-control rounded ${
                      formik.touched.email &&
                      formik.errors.email &&
                      'is-invalid'
                    }`}
                    {...formik.getFieldProps('email')}
                  />
                  <div className='invalid-feedback'>
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
              </div>
              <div>
                <button type='submit' className='btn btn-primary my-3'>
                  submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormikProps;
