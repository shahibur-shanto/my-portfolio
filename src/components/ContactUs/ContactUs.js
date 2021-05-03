import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ztx9gu7', 'template_31rmjal', e.target, 'user_ovyederZMGxRUwI1dn9t1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div className="mt-5">
         <div className="text-center"><h1>Contact Me</h1></div>
         <div className="d-flex justify-content-center">
        <div className="w-50">
            <form className="contact-form" onSubmit={sendEmail}>
      <input className="form-control" type="hidden" name="contact_number" />
      <label>Name</label>
      <input className="form-control" type="text" name="name" />
      <label>Email</label>
      <input className="form-control" type="email" name="email" />
      <label>Message</label>
      <textarea className="form-control" name="message" />
      <br/>
      <input className="btn btn-success" type="submit" value="Send" />
    </form>
    </div>
    </div>
        </div>
    );
};

export default ContactUs;