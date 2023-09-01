import React from 'react'
import { Formik } from 'formik';
import { AiOutlineArrowRight } from 'react-icons/ai';
import validations from './validations';

function ContactForm() {
    return (
        <div className="contact-form">
            <Formik
                initialValues={{
                firstName: '',
                email: '',
                message: '',
            }}
            validationSchema = {validations}
                onSubmit={(values) => {
                    console.log(values)
                }}
                >
                {
                    ({handleSubmit,handleChange, errors}) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" placeholder="name" onChange={handleChange}/>

                            { errors.firstName && (<div className="form-err">{errors.firstName}</div>)}

                            <label htmlFor="email">Mail</label>
                            <input type="email" name="email" placeholder="example@hotmail.com" onChange={handleChange}/>

                            { errors.email && (<div className="form-err">{errors.email}</div>)}

                            <label htmlFor="message">Your Message</label>
                            <textarea
                                name="message"
                                placeholder="My example message"
                                type="textarea"
                                onChange={handleChange}
                            />

                            { errors.message && (<div className="form-err">{errors.message}</div>)}

                            <button type="submit">
                                Send
                                <AiOutlineArrowRight/>
                            </button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default ContactForm
