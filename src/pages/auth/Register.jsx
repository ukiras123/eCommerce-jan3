import React from 'react'
import { Button, Form } from 'react-bootstrap';
import BaseLayout from '../../components/layout/BaseLayout';
import CustomInput from '../../components/layout/customInput/CustomInput';

function Register() {
  const inputFields = [
    {
      label: "First Name *",
      name: "fName",
      type: "text",
      placeholder: "Sam",
      required: true
    },
    {
      label: "Last Name *",
      name: "lName",
      type: "text",
      placeholder: "Bahadur",
      required: true
    },
    {
      label: "Email *",
      name: "email",
      type: "email",
      placeholder: "abc@abc.com",
      required: true
    },
    {
      label: "Phone No",
      name: "phone",
      type: "number",
      placeholder: "46578932"
    },
    {
      label: "Password *",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
      minLength: 6
    },
    {
      label: "Confirm Password *",
      name: "confirmPassword",
      type: "password",
      placeholder: "*******",
      required: true,
      minLength: 6
    }
  ]
  return (
    <BaseLayout>
      <div>
        <Form className='login-form mt-3 mb-3 border p-4 rounded shadow-lg'>
          {inputFields.map(field => {
            return <CustomInput key={field.label} {...field} />
          })}

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>


      </div>
    </BaseLayout>
  )
}

export default Register;
