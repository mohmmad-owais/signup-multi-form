import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
  }


  interface Props {
    setFormValues: any;
    prevValue:any;
    submit:any;
  }

const details: React.FC<Props> = ({ submit ,setFormValues,prevValue }) => {
    return (
        <div>
      <h1>Enter Your Personal Details</h1>
      <Formik
        initialValues={prevValue}

        onSubmit={(
          values: Values,
          
        ) => {
            submit(1);
            setFormValues({...values , ...prevValue});
          
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  
    )
}

export default details
