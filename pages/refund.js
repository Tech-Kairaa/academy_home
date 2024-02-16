import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

function termscondition() {
  return (
    <div>
      <Layout>
        <PageBanner pageName={"Refund & Cancellation"} />
        <section className="Privacypolicy-details-area py-130 rpy-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 " style={{ width: "100%" }}>
                <div className="Privacypolicy-details-wrap">
                  <div className="image mb-25 wow fadeInUp delay-0-2s">
                  <h2 style={{ fontSize: "35px", marginTop: "20px", fontFamily: "'Font Awesome 5 Free'" }}>REFUND & CANCELLATION POLICY</h2>

                    <p>This refund policy is applicable to all Fee for Self paid Students and Sponsored students who have paid Full Fee / Partial Fee.</p>
                    <p>
                    Any kind of refund is not permissible once a candidate has been admitted to a program. The fees and other dues, once paid, are not refundable, adjustable or transferable under any circumstances. No fee will be refunded to the Students discontinuing in the middle of the course.
                    </p>
                    <p>
                    The refund of fee is only applicable if a Program is called off. Our Refund policy is subject to the following conditions:

                    </p>


                    <h2 style={{ fontSize: "35px", marginTop: "20px", fontFamily: "'Font Awesome 5 Free'" }}>Your admission will be cancelled under following circumstances:</h2>




                    <p>
                    If the admission form is incomplete.<br/>
If the supporting documents are not submitted completely.<br/>
If false documents have been submitted.<br/>
If required educational qualifications are not fulfilled.<br/>
If incorrect or wrong information is given<br/>
Note: Admission once cancelled will not be re-considered and the amount paid will not be <br/>refunded under any circumstances.
                    </p>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default termscondition;
