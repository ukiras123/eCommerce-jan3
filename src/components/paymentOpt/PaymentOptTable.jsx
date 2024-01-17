import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addOrUpdateCategoryAction, deleteCategoryAction } from '../../redux/category/categoryAction';
import CustomModal from '../customModal/CustomModal';
import { setModalOpen } from '../../redux/system/systemSlice';
import { getAllPaymentOptAction } from '../../redux/paymentOpt/paymentOptAction';
import NewPaymentOpt from './NewPaymentOpt';

function PaymentOptTable() {
    const dispatch = useDispatch();

    const { paymentOptList } = useSelector(state => state.paymentOption)
    const [selectedOpt, setSelectedOpt] = useState({});

    useEffect(() => {
        dispatch(getAllPaymentOptAction())
    }, [])

    const handleOnEdit = (opt) => {
        setSelectedOpt(opt)
        dispatch(setModalOpen(true))
    }

    const handleOnChange = (e) => {
        let { name, value, checked } = e.target;
        if (name === 'status') {
            // setFormData({
            //     ...formData,
            //     [name]: checked
            // })
            value = checked ? 'active' : 'inactive'
        }
        setSelectedCat({
            ...selectedCat,
            [name]: value
        })
    }
    return (
        <div className='mt-2 mx-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentOptList.map((opt, i) => {
                        return (<tr key={opt.slug}>
                            <td>{i + 1}</td>
                            <td>{<span className={`status-${opt.status}`}>{opt.status}</span>}</td>
                            <td>{opt.name}</td>
                            <td><img src={opt.url} width="100px" alt="" /></td>
                            <td><Button variant='warning' onClick={() => handleOnEdit(opt)}>Edit</Button></td>
                        </tr>)
                    })}

                </tbody>
            </Table>
            <CustomModal title="Update Payment Option">
                <NewPaymentOpt selectedOption={selectedOpt} isEdit />
            </CustomModal>
        </div >
    )
}

export default PaymentOptTable