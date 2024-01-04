import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/layout/customInput/CustomInput';
import { Link } from 'react-router-dom';

function Login() {
    const inputFields = [
        {
            label: "Email *",
            name: "email",
            type: "email",
            placeholder: "abc@abc.com",
            required: true
        },
        {
            label: "Password *",
            name: "password",
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
                        Login
                    </Button>
                    <div>
                        Forget Password? <Link to="/forget-password">Click Here</Link>
                    </div>
                </Form>

            </div>
        </BaseLayout>
    )
}

export default Login;
