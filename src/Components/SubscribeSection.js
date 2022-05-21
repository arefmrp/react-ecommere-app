import React from 'react';
import TitleSection from "./titleSection";
import '../Styles/subscribeSection.css';
import { Formik } from "formik";


class SubscribeSection extends React.Component{
    state = {
        subscribe:{}
    }
    render() {
        return(
            <div className='subscribe-section'>
                <TitleSection title='ما را دنبال کنید'></TitleSection>
                <div className='subscribe-section-desc'>
                    <p>
                        شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                    </p>
                </div>
                <div className='subscribe-section-form'>
                    <Formik
                        initialValues={{ email: ""}}
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
                                this.state.subscribe = values
                                console.log(this.state.subscribe)
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
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    style={{direction:"rtl"}}
                                    placeholder={'ایمیل خود را وارد کنید ...'}
                                />
                                {errors.email && touched.email && errors.email}


                                <button type="submit" disabled={isSubmitting}>
                                    ارسال شود
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

export default SubscribeSection;