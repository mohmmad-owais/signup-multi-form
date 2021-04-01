import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Stepper from '../src/stepper';


// interface FormValues{
//   name: String;

// }

// const initialValues : FormValues = {
//    name:''
// }


// const registerSchema = Yup.object().shape({
//   name:Yup.string()
//   .min(2,'Name must have at least 2 character')
//   .required('Name is required')
// });


function App() {

    // const forSubmit = (values : FormValues) :void =>{
    //     alert(JSON.stringify(values));
    // }

  return (
    <div className="App">
        <Stepper />
    </div>
  );
}

export default App;



      {/* <h1>Register</h1>
        <Formik
        initialValues={initialValues}
        onSubmit={forSubmit}
        validationSchema={registerSchema}
        >
          {({dirty, isValid}) => {
            return(
              <Form>
                  <div>
                    <label>Name: </label>
                    <Field name="name" as ="input" />
                    <ErrorMessage name="name" />  
                  </div>
                  <button disabled={!dirty || !isValid} type="submit"> Sign up </button>
              </Form>
            )
          }}
        </Formik> */}