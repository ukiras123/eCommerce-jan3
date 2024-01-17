import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../../firebase-config/config"
import { DB_NAMES } from "../../utils"
import { setPaymentOptList } from "./paymentOptSlice"

// Create and Update
export const addOrUpdatePaymentOptAction = ({ slug, ...rest }) => async (dispatch) => {
    try {
        const poPromise = setDoc(doc(db, DB_NAMES.PAYMENT_OPTION, slug), rest, { merge: true })
        toast.promise(poPromise, {
            pending: "In Progress"
        })
        await poPromise;
        toast.success("PaymentOpt added")
        dispatch(getAllPaymentOptAction())
    } catch (e) {
        toast.error(`Something went wrong ${e.message}`)
    }
}


// Get all from db
export const getAllPaymentOptAction = () => async dispatch => {
    try {
        const querySnapshot = await getDocs(collection(db, DB_NAMES.PAYMENT_OPTION));
        const poList = [];
        querySnapshot.forEach(doc => {
            const slug = doc.id;
            const data = doc.data()
            poList.push({
                ...data,
                slug
            })
        })
        dispatch(setPaymentOptList(poList))
    } catch (e) {
        toast.error(`Something went wrong ${e.message}`)
    }
}

export const deletePaymentOptAction = ({ slug }) => async dispatch => {
    try {
        const deletePromise = deleteDoc(doc(db, DB_NAMES.PAYMENT_OPTION, slug));
        toast.promise(deletePromise, {
            pending: "In Progress"
        })
        await deletePromise;
        toast.success("PaymentOpt Deleted")
        dispatch(getAllPaymentOptAction())
    } catch (e) {
        toast.error(`Something went wrong ${e.message}`)
    }
}