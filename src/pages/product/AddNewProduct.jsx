import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../components/customInput/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import slugify from 'slugify'
import { addOrUpdateProductAction } from '../../redux/product/productAction'

function AddNewProduct() {
    const inputFields = [
        {
            label: "Product Name *",
            name: "name",
            type: "text",
            placeholder: "iPhone 6",
            required: true
        },
        {
            label: "SKU *",
            name: "sku",
            type: "text",
            placeholder: "45363ds",
            required: true
        },
        {
            label: "Price *",
            name: "price",
            type: "number",
            placeholder: "123",
            required: true
        },
        {
            label: "Quantity",
            name: "quantity",
            type: "number",
            placeholder: "422"
        },
        {
            label: "Product Description",
            name: "description",
            type: "text",
            as: "textarea",
            row: 5,
            placeholder: "Description"
        },
    ]

    const { categoryList } = useSelector(state => state.category)

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
    })
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting", formData)
        const slug = slugify(formData.name, {
            lower: true,
            trim: true
        });
        const finalData = { ...formData, slug }
        dispatch(addOrUpdateProductAction(finalData))

    }
    return (
        <AdminLayout title="Add New Product">
            <Link className='mx-3' to={"/product"}>
                <Button>Go Back</Button>
            </Link>
            <div className='mx-3'>
                <Form onSubmit={handleOnSubmit} className='mt-3 mb-3 border p-4 rounded shadow-lg'>
                    <Form.Group className="mb-3">
                        <Form.Label>Category *</Form.Label>
                        <Form.Select name='categorySlug' required onChange={handleOnChange}>
                            <option>Select Category</option>
                            {categoryList.map(cat => {
                                return <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    {inputFields.map(field => {
                        return <CustomInput key={field.label} {...field} onChange={handleOnChange} />
                    })}

                    <Form.Group className="mb-3">
                        <Form.Control multiple type="file" accept='image/png, image/jpeg' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>

                </Form>


            </div>
        </AdminLayout>
    )
}

export default AddNewProduct