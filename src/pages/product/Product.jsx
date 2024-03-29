import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout';
import { Button } from 'react-bootstrap';
import ProductTable from '../../components/product/ProductTable';
import { Link } from 'react-router-dom';

function Product() {
    return (
        <AdminLayout title="Product">
            <div className='text-end me-3'>
                <Link to={"/product/new"}>
                    <Button>Add Product</Button>
                </Link>
            </div>
            <ProductTable />
        </AdminLayout>
    )
}

export default Product;
