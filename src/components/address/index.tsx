import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    address: string;
    postal: string;

  }

  interface Props {
    
    setFormValues:any;
    prevValue:any;
    submit:any;
  }


const address: React.FC<Props> = ({ submit , setFormValues,prevValue }) => {
    return (
        <div>
      <h1>Please Enter Your Address</h1>
      <Formik
        initialValues={prevValue}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
                submit(2);
                setFormValues({...values,...prevValue});
        }}
      >
        <Form>
          <label htmlFor="address">Permanent Address</label>
          <Field id="address" required name="address" placeholder="House # xyz" />

          <label htmlFor="postal">Postal Address</label>
          <Field id="postal" required name="postal" placeholder="232XXX22" />

          <button onClick={()=> submit(0)}>Back</button>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  
    )
}

export default address
