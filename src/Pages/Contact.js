import React from "react";
import TitleSection from "../Components/titleSection";
import '../Styles/contact.css';
import { Formik } from "formik";


class Contact extends React.Component{
    render() {
        return (
            <div className='about-section'>
                <div className='container'>
                    <TitleSection title='تماس با ما'></TitleSection>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 col-sm-6 col-xs-12 contact-section-row1'>
                            <div className='contact-section-form'>
                                <Formik
                                    initialValues={{ name: '', email: '',subject:'',textarea:'' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({
                                          values,
                                          errors,
                                          touched,
                                          handleChange,
                                          handleBlur,
                                          handleSubmit,
                                          isSubmitting,
                                          /* and other goodies */
                                      }) => (
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                name="name"
                                                className={'input-cs-name'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                placeholder='نام خود را وارد کنید ..'
                                            />
                                            {errors.name && touched.name && errors.name}
                                            <input
                                                type="email"
                                                name="email"
                                                className={'input-cs-email'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                placeholder='ایمیل خود را وارد کنید ..'
                                            />
                                            {errors.email && touched.email && errors.email}
                                            <input
                                                type="text"
                                                name="subject"
                                                className={'input-cs-subject'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.subject}
                                                placeholder='عنوان متن را وارد کنید ..'
                                            />
                                            {errors.subject && touched.subject && errors.subject}
                                           <textarea

                                                name="textarea"
                                                className={'input-cs-textarea'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.textarea}
                                                placeholder='متن خود را وارد کنید ..'
                                            />
                                            {errors.textarea && touched.textarea && errors.textarea}


                                            <button className='input-cs-btn' type="submit" disabled={isSubmitting}>
                                                فرستادن
                                            </button>
                                        </form>
                                    )}
                                </Formik>









                            </div>
                        </div>
                        <div className='col-md-5 col-sm-6 col-xs-12 contact-section-row2'>
                            <div className='contact-section-map'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102165.56921107793!2d54.36802306197361!3d36.85028195551371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8349d4bb44853b%3A0xfd797c3f32f58939!2sGorgan%2C%20Golestan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1624308209323!5m2!1sen!2s"
                                    width="100%" height="100%" allowFullScreen=""
                                    loading="lazy">

                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}



export default Contact;