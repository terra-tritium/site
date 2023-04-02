import React, {useState} from "react";
import emailjs from '@emailjs/browser'

function Support() {

    const[email,setEmail] = useState('')
    const[name, setName] = useState('')
    const[message, setMessage] = useState('')

    function sendEmail(e){
      e.preventDefault();

      if(name ==='' || email === '' || message === ''){
        alert("Fill all required fields ");
        return;
      }

      const templateParams = {
        email: email,
        from_name: name,
        message: message
      }

      emailjs.send('service_qhiwgfa', 'template_n1e30ht', templateParams, '3iQl3W-42bwwB6i7x')
      .then((response) => {
        alert("Email successfully sent")
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.error("ERRO:", err)
        alert("Failed to send email. Please try again later.")
      })
    }

  return (
    <div className="mpl-box-md bg-light" id="support">
      <div className="container">
        <h2 className="display-2 mb-160 text-center" data-sr data-sr-duration="1200" data-sr-distance="20">
          Contact Us
        </h2>
        <form
          className="mpl-form-ajax"
          onSubmit={sendEmail}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="row vgap" data-sr="request" data-sr-interval="120" data-sr-duration="1200" data-sr-distance="20">
                <div className="col-12 col-md-6" data-sr-item="request">
                  <input
                    className="form-control"
                    type="email"
                    id="contact_email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <span className="form-control-bg"></span>
                </div>
                <div className="col-12 col-md-6" data-sr-item="request">
                  <input
                    className="form-control"
                    type="text"
                    id="contact_subject"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  <span className="form-control-bg"></span>
                </div>
                <div className="col-12" data-sr-item="request">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="contact_information"
                    placeholder="More Information"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  ></textarea>
                </div>
                <div className="col-12" data-sr-item="request">
                  <button className="btn btn-md btn-block">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Support;
      