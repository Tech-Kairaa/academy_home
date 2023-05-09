/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";

const Faq = () => {
  const faqsLeft = [
    { title: "What is Web Design ?" },
    { title: "Diffent Between UX and UI Design ?" },
    { title: "Importance Of Typography ?" },
    { title: "What is Warframe ?" },
    { title: "evelopers Need To Know About Figma ?" },
  ];
  const faqsRight = [
    { title: "What is Web Design ?" },
    { title: "Search Engine Optimization ?" },
    { title: "Improve User Interview Questions ?" },
    { title: "Complete Guide To Mechanical Keyboards ?" },
    { title: "Headless WordPress Site On The JAMstack ?" },
    { title: "Online Environments Older Users ?" },
  ];
  const [active, setActive] = useState(`a1`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        {faqsLeft.map((faq, i) => (
          <WellernAccordion
            title={faq.title}
            onClick={() => onClick(`a${i + 1}`)}
            active={active}
            eventName={`a${i + 1}`}
            key={i}
          >
            <p>
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendise
              ultre gravida. risus commodo viverra maecenas accumsan lacus.{" "}
            </p>
          </WellernAccordion>
        ))}
      </div>
      <div className="col-lg-6">
        {faqsRight.map((faq, i) => (
          <WellernAccordion
            key={i}
            title={faq.title}
            onClick={() => onClick(`b${i + 1}`)}
            active={active}
            eventName={`b${i + 1}`}
          >
            <p>
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendise
              ultre gravida. risus commodo viverra maecenas accumsan lacus.{" "}
            </p>
          </WellernAccordion>
        ))}
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <Layout>
      <PageBanner pageName={"FAQ's"} />
      <section className="faqs-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="section-title mb-35">
            <span className="sub-title-two">Have Any Questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Tab.Container defaultActiveKey={"tabContent1"}>
            <Nav className="nav faqs-tab mb-40">
              <li>
                <Nav.Link eventKey={"tabContent1"} href="#tabContent1">
                  Course Requirments
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent2"} href="#tabContent2">
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent3"} href="#tabContent3">
                  Instructors
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent4"} href="#tabContent4">
                  Pricing Package
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey={"tabContent5"} href="#tabContent5">
                  Setting &amp; Privacy
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content faq-accordion">
              <Tab.Pane className="tab-pane fade" eventKey="tabContent1">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent2">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent3">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent4">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent5">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* FAQ's Section End */}
      {/* Video Section Start */}
      <div className="video-section wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="video-inner overlay">
            <img src="/assets/images/video/video-section-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Section End */}
      {/* FAQs Form Area Start */}
      <section className="faq-form-area rel z-1 pt-120 rpt-90 pb-125 rpb-95">
        <div className="container">
          <div className="row large-gap align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="faqs-form-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">Get in Touch ?</span>
                  <h2>Have Any Question On Minds ?</h2>
                </div>
                <p>
                  On the other hand we denounce with righteou indigntion and
                  dislike men who are so beguiled and drem the charms of
                  pleasure of the moment so blinded by desire
                </p>
                <div className="faq-contact-info pt-20">
                  <div className="icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="content">
                    <h6>Phone Number</h6>
                    <a href="callto:+012(345)6789">+012(345) 67 89</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="faq-form"
                className="faq-form wow fadeInLeft delay-0-2s"
                name="faq-form"
                action="#"
                method="post"
              >
                <div className="row clearfix ">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="full-name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Full Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="fas fa-phone" />
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        defaultValue=""
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="faq-email">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="faq-email"
                        name="faq-email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-30">
                    <div className="form-group">
                      <select name="subject" id="subject">
                        <option value="Subject">Subject</option>
                        <option value="Instructors">Instructors</option>
                        <option value="Pricing">Pricing</option>
                        <option value="Setting">Setting</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="fas fa-pencil-alt" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Why you would like to discuss"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group mb-0 form-btn-label">
                      <button type="submit" className="theme-btn">
                        Send Message <i className="fas fa-arrow-right" />
                      </button>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="privacy-policy"
                          name="privacy"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="privacy-policy"
                        >
                          I ageree with the privacy policy
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faqs;
