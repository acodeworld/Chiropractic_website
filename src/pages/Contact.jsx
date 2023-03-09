import React, {useRef} from 'react';
import { useFormik} from 'formik';
import * as Yup from "yup";
import emailjs from "@emailjs/browser"




const Contact = () => {

const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('gmail', 'template_cr8eqna', form.values, 'tafE8A_XrdA1Eh0Bs')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// };

console.log(form)
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formik = useFormik({
    initialValues:  {
        firstName: "",
        lastName: "",
        subject:"",
        email: "",
        message:"",
    },
    validationSchema: Yup.object({
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        lastName: Yup.string()  
        .max(20, "Must be 20 characters or less")
        .required("Required"),
        email: Yup.string()    
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address")
        .required("Required"),
        number: Yup.string()
        .matches(phoneRegExp, 'Please enter a valid phone number')
        .required("Required")
        
    }),
    onSubmit: (values) => {
        emailjs.sendForm('service_chija0l', 'template_cr8eqna', form.current, 'tafE8A_XrdA1Eh0Bs')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    }
})




  return (
    
    <div>

        <div className='contact-container'>

                <div className='contact-text'>
                    <h1 className='contact-title'>Contact Us</h1>
                    <p className='contact-message'>
                        If you have any questions, give us a call or fill out this form and we will get back to you shortly.
                    </p>
                    <h2 className='phone-number contact-number'>410-35-<span className='number-span'>SPINE</span></h2>

                </div>
           
                
                <form className='form-container' ref={form} onSubmit={formik.handleSubmit}>
                    <input 
                    className='contact-input'
                    id='firstName'
                    type="text" 
                    name='firstName'
                    placeholder='Enter your firstname'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                    <input 
                    id='lastName'
                    className='contact-input'
                    type="text" 
                    name='lastName'
                    placeholder='Enter your lastname'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}

                    <input 
                    id='email'
                    className='contact-input'
                    type="email" 
                    name='email'
                    placeholder='Enter your email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                    
                    <input 
                    id='subject'
                    className='contact-input'
                    type="text" 
                    name='subject'
                    placeholder='Enter your subject'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    />
                    {formik.touched.subject && formik.errors.subject ? <p>{formik.errors.subject}</p> : null}
                    
                    <input 
                    id='number'
                    className='contact-input'
                    type="text" 
                    name='number'
                    placeholder='Enter your contact number'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                    />
                    {formik.touched.number && formik.errors.number ? <p>{formik.errors.number}</p> : null}


                    <textarea 
                    type="text"
                    id="textArea" 
                    name='message'
                    placeholder='Enter message'
                    cols="40" 
                    rows="10"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    ></textarea>

                    <button className='contact-btn' type='submit' >Submit</button>
                    
                </form>
            
        </div>

        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.814933229264!2d-76.53660164958376!3d39.38306552567514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c809cd26dccdc9%3A0x1323097228d46c8e!2sPremier%20chiropractic%20and%20injury%20center!5e0!3m2!1sen!2sus!4v1675670089010!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">      
            </iframe>
          </div>

    </div>
    
  )
}

export default Contact