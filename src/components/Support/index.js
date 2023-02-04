import React from "react";

function Support() {
  return (
    <div className="mpl-box-md bg-light" id="support">
      <div className="container">
        <h2 className="display-2 mb-60 text-center" data-sr data-sr-duration="1200" data-sr-distance="20">
          Support
        </h2>
        <form
          action="php/ajax-contact-form.php"
          method="POST"
          role="form"
          className="mpl-form-ajax"
          data-toggle="validator"
        >
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="row vgap" data-sr="request" data-sr-interval="120" data-sr-duration="1200" data-sr-distance="20">
                <div className="col-12 col-md-6" data-sr-item="request">
                  <input
                    className="form-control"
                    type="email"
                    id="contact_email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <span className="form-control-bg"></span>
                </div>
                <div className="col-12 col-md-6" data-sr-item="request">
                  <input
                    className="form-control"
                    type="text"
                    id="contact_subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <span className="form-control-bg"></span>
                </div>
                <div className="col-12" data-sr-item="request">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="contact_information"
                    name="information"
                    placeholder="More Information"
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