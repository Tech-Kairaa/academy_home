import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import { WorkStepsProps } from '../../sliderProps';
import Link from 'next/link';

export default class WorkSteps extends Component {
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
		return (
			<Fragment>
				<div className='row justify-content-between align-items-center pb-30 wow fadeInUp delay-0-2s'>
					<div className='col-lg-8'>
						<div className='section-title'>
							<span className='sub-title mb-15'>Aru you interested to</span>
							<h2>Steps to Become an instructor</h2>
						</div>
					</div>
					<div className='col-lg-4 text-end'>
						<Link href='/instructor/signup' className='theme-btn'>
							Register now
						</Link>
					</div>
				</div>
				<Slider
					{...WorkStepsProps}
					ref={(c) => (this.slider = c)}
					className='work-step-wrap wow fadeInUp delay-0-4s'
				>
					<div className='work-step-item'>
						<span className='number'>01</span>
						<div className='content'>
							<h4>Setup instructor account</h4>
							<p>
								Create your account in just a few easy steps and start exploring
								our platform!
							</p>
						</div>
					</div>
					<div className='work-step-item'>
						<span className='number'>02</span>
						<div className='content'>
							<h4>Choose a topic</h4>
							<p>
								What will you cover in your course? What are the learning
								objectives? etc..
							</p>
						</div>
					</div>
					<div className='work-step-item'>
						<span className='number'>03</span>
						<div className='content'>
							<h4>Develop your course content</h4>
							<p>
								This could include videos, lectures, and other interactive
								elements. Make sure your content is clear.
							</p>
						</div>
					</div>
					<div className='work-step-item'>
						<span className='number'>04</span>
						<div className='content'>
							<h4>Choose your basic plan</h4>
							<p>
								Choose from one of our basic pricing plans to fit your
								requirements, and unlock a world of possibilities.
							</p>
						</div>
					</div>
				</Slider>
				<div className='slider-arrow-btns text-lg-right mt-10'>
					<button onClick={this.previous} className='work-prev'>
						<i className='fas fa-angle-left' />
					</button>
					<button onClick={this.next} className='work-next'>
						<i className='fas fa-angle-right' />
					</button>
				</div>
			</Fragment>
		);
	}
}
