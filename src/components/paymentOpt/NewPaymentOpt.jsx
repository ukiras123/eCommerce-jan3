import React, { useEffect, useState } from 'react'
import { Button, Col, Form, ProgressBar, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addOrUpdateCategoryAction } from '../../redux/category/categoryAction';
import slugify from 'slugify';
import { handleFileUpload } from '../../utils';
import { toast } from 'react-toastify';
import { addOrUpdatePaymentOptAction } from '../../redux/paymentOpt/paymentOptAction';
import { setModalOpen } from '../../redux/system/systemSlice';
function NewPaymentOpt({ selectedOption, isEdit }) {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        status: "inactive"
    })
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (selectedOption) {
            setFormData(selectedOption)
        }
    }, [selectedOption])

    const handleOnChange = (e) => {
        let { name, value, checked } = e.target;
        if (name === 'status') {
            value = checked ? 'active' : 'inactive'
        }
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleOnUpdate = async (e) => {
        e.preventDefault();
        try {
            const paymentOptObj = {
                ...formData
            }
            if (files.length > 0) {
                const url = await handleFileUpload(files[0], setProgress);
                paymentOptObj.url = url
            }

            await dispatch(addOrUpdatePaymentOptAction(paymentOptObj))
            dispatch(setModalOpen(false))
        } catch (e) {
            toast.error("Something went wrong")
        }
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            // Image Upload
            const url = await handleFileUpload(files[0], setProgress)
            const paymentOptObj = { ...formData, url }
            paymentOptObj.slug = slugify(formData.name, {
                lower: true,
                trim: true
            })
            // Grab the URL
            // Upload Payment Options to DB
            dispatch(addOrUpdatePaymentOptAction(paymentOptObj))
        } catch (e) {
            toast.error("Something went wrong!")
        }
    }

    const handleImageAttachment = (e) => {
        const { files } = e.target;
        setFiles([...files])
    }

    return (
        <div className='border py-3 px-2 rounded-1 mx-3 shadow-lg'>
            <Form onSubmit={isEdit ? handleOnUpdate : handleOnSubmit}>
                <Row>
                    <Col md={isEdit ? "0" : "2"}>
                        <Form.Check className="mb-3"
                            type="switch"
                            label="Status"
                            name="status"
                            checked={formData?.status === 'active' ? true : false}
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col md={isEdit ? "0" : "4"}>
                        <Form.Group className="mb-3" >
                            <Form.Control required type="text" name="name" placeholder="Name"
                                onChange={handleOnChange}
                                value={formData?.name}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={isEdit ? "0" : "4"}>
                        <Form.Group className="mb-3" >
                            <Form.Control required type="file" accept='image/png, image/jpeg' onChange={handleImageAttachment} />
                            {progress !== 100 ? <ProgressBar animated now={progress} label={`${progress.toFixed(2)}%`} /> : <ProgressBar variant='success' now={100} visuallyHidden />}
                        </Form.Group>
                    </Col>
                    {isEdit && <div>
                        <img src={formData.url} alt="IMG" width={"200px"} />
                    </div>}
                    <Col md={isEdit ? "0" : "2"}>
                        <Button type='submit'>{isEdit ? "Update" : "Add"}</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default NewPaymentOpt