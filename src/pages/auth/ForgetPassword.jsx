import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/layout/customInput/CustomInput';
import { Link } from 'react-router-dom';

function ForgetPassword() {
    const inputFields = [
        {
            label: "Email *",
            name: "email",
            type: "email",
            placeholder: "abc@abc.com",
            required: true
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
                        <Link to="/login">Go to login</Link>
                    </div>
                </Form>

            </div>
        </BaseLayout>
    )
}

export default ForgetPassword;
