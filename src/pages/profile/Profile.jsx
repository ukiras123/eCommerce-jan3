import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import BaseLayout from '../../components/layout/BaseLayout';
import CustomInput from '../../components/customInput/CustomInput';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createAdminAction, updatePasswordAction, updateProfileAction } from '../../redux/auth/userAction';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/layout/AdminLayout';
function Profile() {
    const [formData, setFormData] = useState({
        role: "admin"
    });
    const [passData, setPassData] = useState({});

    const inputFields = [
        {
            label: "First Name *",
            name: "fName",
            type: "text",
            placeholder: "Sam",
            required: true,
            value: formData?.fName,
        },
        {
            label: "Last Name *",
            name: "lName",
            type: "text",
            placeholder: "Bahadur",
            required: true,
            value: formData?.lName,
        },
        {
            label: "Email *",
            name: "email",
            type: "email",
            placeholder: "abc@abc.com",
            disabled: true,
            required: true,
            value: formData?.email,
        },
        {
            label: "Phone No",
            name: "phone",
            type: "number",
            placeholder: "46578932",
            value: formData?.phone,
        },
        // {
        //     label: "Password *",
        //     name: "password",
        //     type: "password",
        //     placeholder: "*******",
        //     required: true,
        //     minLength: 6
        // },
        // {
        //     label: "Confirm Password *",
        //     name: "confirmPassword",
        //     type: "password",
        //     placeholder: "*******",
        //     required: true,
        //     minLength: 6
        // }
    ]
    const passwordFields = [
        {
            label: "Old Password *",
            name: "oldPassword",
            type: "password",
            placeholder: "*******",
            required: true,
            minLength: 6
        },
        {
            label: "New Password *",
            name: "password",
            type: "password",
            placeholder: "*******",
            required: true,
            minLength: 6
        },
        {
            label: "Confirm New Password *",
            name: "confirmPassword",
            type: "password",
            placeholder: "*******",
            required: true,
            minLength: 6
        }
    ]
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userInfo)
    useEffect(() => {
        setFormData(user)
    }, [user])


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleOnPasswordChange = (e) => {
        const { name, value } = e.target;
        setPassData({
            ...passData,
            [name]: value
        })
    }

    const handleOnSubmit = (e) => {
        // Prevent page from refreshing
        e.preventDefault();
        dispatch(updateProfileAction(formData))
    }
    const handleOnPasswordUpdate = (e) => {
        // Prevent page from refreshing
        e.preventDefault();
        const { oldPassword, password, confirmPassword } = passData;
        if (password !== confirmPassword) {
            toast.error("Password should match");
            return;
        }
        dispatch(updatePasswordAction(user.email, oldPassword, password))
    }

    return (
        <AdminLayout title="Profile">
            <div>
                <Form onSubmit={handleOnSubmit} className='login-form mt-3 mb-3 border p-4 rounded shadow-lg'>
                    {inputFields.map(field => {
                        return <CustomInput key={field.label} {...field} onChange={handleOnChange} />
                    })}

                    <Button variant="primary" type="submit" >
                        Update
                    </Button>
                </Form>
            </div>
            <div>
                <Form onSubmit={handleOnPasswordUpdate} className='login-form mt-3 mb-3 border p-4 rounded shadow-lg'>
                    {passwordFields.map(field => {
                        return <CustomInput key={field.label} {...field} onChange={handleOnPasswordChange} />
                    })}

                    <Button variant="primary" type="submit" >
                        Update
                    </Button>
                </Form>
            </div>
        </AdminLayout>
    )
}

export default Profile;
