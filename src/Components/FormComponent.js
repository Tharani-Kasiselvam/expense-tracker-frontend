import { useFormik } from "formik"
import { DayPicker } from "react-day-picker";

import "react-day-picker/style.css";
import { useGlobalContext } from '../context/GlobalContext';

const FormComponent = () => {

    const { addIncome } = useGlobalContext()

    const validate = values => {
        const errors = {};

        if (!values.title) {
            errors.title = '*Title is required';
        }

        if (!values.amount) {
            errors.amount = '*Amount is required';
        }

        if (values.amount < 0 || isNaN(values.amount)) {
            errors.amount = '*Amount should be Positive integer';
        }

        if (values.category === "Select Option" || values.category === "") {
            errors.category = '*Category is required';
        }

        if (!values.description) {
            errors.description = '*Description is required';
        }

        if (values.description.length > 50) {
            errors.description = '*Kindly enter below 50 chars';
        }

        if (!values.date) {
            errors.date = '*Date is required';
        }
        // return the errors object
        return errors;
    }

    const style = {
        color: "red",
        fontweight: "italic"
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            amount: "",
            category: "",
            description: "",
            date: new Date()
        },
        validate,
        onSubmit: () => {
            console.log(formik.values)
            addIncome(formik.values)
            formik.resetForm()
        }
    })

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className='form_div'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="title">Salary Title : </label>
                                <input
                                    type='text'
                                    id='title'
                                    placeholder='Enter Title'
                                    {...formik.getFieldProps('title')}
                                />
                            </div>
                            {formik.touched.title && formik.errors.title ? <div style={style}>{formik.errors.title}</div> : null}
                            <br />

                            <div className='form-group'>
                                <label htmlFor="amount">Received Amount : </label>
                                <input
                                    type='text'
                                    placeholder='Enter Amount'
                                    id='amount'
                                    {...formik.getFieldProps('amount')}
                                />
                            </div>
                            {formik.touched.amount && formik.errors.amount ? <div style={style}>{formik.errors.amount}</div> : null}
                            <br />

                            <div className='form-group'>
                                <label htmlFor="Received Date">Date : </label>
                                <DayPicker
                                    id='date'
                                    placeholderText='Select Date'
                                    dateFormat="dd/MM/yyyy"
                                    selected={formik.values.date}
                                    onChange={dateVal => formik.setFieldValue('date', new Date(dateVal))}
                                />
                            </div>
                            {formik.touched.date && formik.errors.date ? <div style={style}>{formik.errors.date}</div> : null}
                            <br />
                            <div className='selects form-group'>
                                <label htmlFor="Category">Category : </label>
                                <select id='category' value={formik.category}
                                    onChange={(e) => formik.setFieldValue('category', e.target.value)}>
                                    <option value="default">Select Option</option>
                                    <option value="Salary">Salary</option>
                                    <option value="Freelancing">Freelancing</option>
                                    <option value="Bitcoin">Bitcoin</option>
                                    <option value="Bank">Bank</option>
                                    <option value="Stocks">Stocks</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Others">Others</option>
                                </select>

                                {/* {formik.getFieldProps('category')} */}
                            </div>
                            {formik.touched.category && formik.errors.category ? <div style={style}>{formik.errors.category}</div> : null}
                            <br />

                            <div className='form-group'>
                                <label htmlFor="description">Description : </label>
                                <textarea
                                    type='text'
                                    placeholder='Enter Description'
                                    id='description'
                                    {...formik.getFieldProps('description')}
                                />
                            </div>
                            {formik.touched.description && formik.errors.description ? <div style={style}>{formik.errors.description}</div> : null}
                            <br />

                            <div className='submit-btn'>
                                <button type="submit" className='btn-form'>Add Income</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FormComponent