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
				<div className='row justify-content-between align-items-center pb-5 wow fadeInUp delay-0-2s'>
					<div className='col-lg-4'>
						<div className='slider-arrow-btns text-lg-right mt-10'>
							<button onClick={this.previous} className='work-prev'>
								<i className='fas fa-angle-left' />
							</button>
							<button onClick={this.next} className='work-next'>
								<i className='fas fa-angle-right' />
							</button>
						</div>
					</div>
					<div className='col-lg-8 text-end'>
						<div className='section-title'>
							<span className='sub-title mb-15'>Openings</span>
							<h2>Immediate joiners preferred</h2>
						</div>
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
							<h4>Full Stack Developer</h4>
							<p>
								Experienced Fullstack Developer (2+ years) proficient in React,
								MongoDB, Node, Express and REST API integration.
							</p>
						</div>
					</div>
					<div className='work-step-item'>
						<span className='number'>02</span>
						<div className='content'>
							<h4>Laravel Developer</h4>
							<p>
								Experienced Laravel Developer (2+ years) proficient in Laravel,
								MySQL, and REST API integration.
							</p>
						</div>
					</div>
					<div className='work-step-item'>
						<span className='number'>03</span>
						<div className='content'>
							<h4>Backend Developer</h4>
							<p>
								Experienced Nodejs Developer (1+ years) proficient in Nodejs,
								MongoDB, MySQL, and REST API integration.
							</p>
						</div>
					</div>
					<div className='work-step-item'>
						<span className='number'>04</span>
						<div className='content'>
							<h4>Customer Support</h4>
							<p>
								Experienced Candidate (1+ years) with good communication,
								Freshers also welcome.
							</p>
						</div>
					</div>
				</Slider>
			</Fragment>
		);
	}
}
