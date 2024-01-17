import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout';
import NewPaymentOpt from '../../components/paymentOpt/NewPaymentOpt';
import PaymentOptTable from '../../components/paymentOpt/PaymentOptTable';

function PaymentOption() {
    return (
        <AdminLayout title="Payment Option">
            {/* Payment Option form */}
            <NewPaymentOpt />
            {/* Payment Table */}
            <PaymentOptTable />
        </AdminLayout>
    )
}

export default PaymentOption;
