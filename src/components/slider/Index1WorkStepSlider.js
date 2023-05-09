import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Index1WorkStepSliderprops } from "../../sliderProps";

export default class Index1WorkStepSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      speed: 400,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <div className="row justify-content-between align-items-center pb-30 wow fadeInUp delay-0-2s">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title">
              <span className="sub-title mb-15">How It Works</span>
              <h2>Very Simple Steps to Success Golas</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="slider-arrow-btns text-lg-right mt-10">
              <button onClick={this.previous} className="work-prev">
                <i className="fas fa-angle-left" />
              </button>
              <button onClick={this.next} className="work-next">
                <i className="fas fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
        <Slider
          {...Index1WorkStepSliderprops}
          ref={(c) => (this.slider = c)}
          className="work-step-wrap wow fadeInUp delay-0-4s"
        >
          <div className="work-step-item">
            <span className="number">01</span>
            <div className="content">
              <h4>Transformation Completed</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <span className="number">02</span>
            <div className="content">
              <h4>Schedule a Meeting</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <span className="number">03</span>
            <div className="content">
              <h4>Make a Decision</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
