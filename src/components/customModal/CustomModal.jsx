import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setModalOpen } from '../../redux/system/systemSlice';

function CustomModal({ children, title, ...rest }) {
    const { modalOpen } = useSelector(state => state.system)
    const dispatch = useDispatch();
    const handleOnClose = () => {
        dispatch(setModalOpen(false))
    }
    return (
        <Modal show={modalOpen} onHide={handleOnClose} {...rest}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleOnClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal