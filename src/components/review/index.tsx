import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { isNoSubstitutionTemplateLiteral } from 'typescript';



  interface Props {
    values:any;
    submit:any;
    
  }


const review: React.FC<Props> = ({values,submit} ) => {
   
   
   
    return (
        <div>
            <p>First Name {values.firstName}</p>
            <p>Last Name {values.lastName}</p>
            <p>Email{values.email}</p>
            <p>Permanent Address{values.address}</p>
            <p>Postal code {values.postal}</p>
            <button onClick={()=> submit(1)}>Back</button>
            
    </div>
  
    )
}

export default review
