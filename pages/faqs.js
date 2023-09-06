/* eslint-disable @next/next/no-img-element */
import Accordion from '@/components/elements/Accordion';
import PageBanner from '@/components/PageBanner';
import Layout from '../src/layout/Layout';

const Faq = () => {
	return (
		<div className='row'>
			<div className='col-lg-6'>
				<Accordion>
					<Accordion.Item title='What is Web Design ?'>
						Sit amet consectetur adipiscing elit sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Quis ipsum suspendise
						ultre gravida. risus commodo viverra maecenas accumsan lacus.
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
};

const Faqs = () => {
	return (
		<Layout>
			<PageBanner pageName={"FAQ's"} />
			<section className='faqs-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s'>
				<div className='container'>
					<div className='section-title mb-35'>
						<span className='sub-title-two'>Have Any Questions?</span>
						<h2>Frequently Asked Questions</h2>
					</div>
					<Faq />
				</div>
			</section>
			{/* FAQ's Section End */}
			{/* Video Section Start */}
			<div className='video-section wow fadeInUp delay-0-2s'>
				<div className='container'>
					<div className='video-inner overlay'>
						<img src='/assets/images/video/video-section-bg.jpg' alt='Video' />
						<a
							href='https://www.youtube.com/watch?v=9Y7ma241N8k'
							className='mfp-iframe video-play'
						>
							<i className='fas fa-play' />
						</a>
					</div>
				</div>
			</div>
			{/* Video Section End */}
			{/* FAQs Form Area Start */}
			<section className='faq-form-area rel z-1 pt-120 rpt-90 pb-125 rpb-95'>
				<div className='container'>
					<div className='row large-gap align-items-center justify-content-between'>
						<div className='col-lg-5'>
							<div className='faqs-form-content rmb-65 wow fadeInRight delay-0-2s'>
								<div className='section-title mb-25'>
									<span className='sub-title-two'>Get in Touch ?</span>
									<h2>Have Any Question On Minds ?</h2>
								</div>
								<p>
									On the other hand we denounce with righteou indigntion and
									dislike men who are so beguiled and drem the charms of
									pleasure of the moment so blinded by desire
								</p>
								<div className='faq-contact-info pt-20'>
									<div className='icon'>
										<i className='fas fa-phone' />
									</div>
									<div className='content'>
										<h6>Phone Number</h6>
										<a href='callto:+012(345)6789'>+012(345) 67 89</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-7'>
							<form
								onSubmit={(e) => e.preventDefault()}
								id='faq-form'
								className='faq-form wow fadeInLeft delay-0-2s'
								name='faq-form'
								action='#'
								method='post'
							>
								<div className='row clearfix '>
									<div className='col-sm-6'>
										<div className='form-group'>
											<label htmlFor='full-name'>
												<i className='far fa-user' />
											</label>
											<input
												type='text'
												id='full-name'
												name='full-name'
												className='form-control'
												defaultValue=''
												placeholder='Full Name'
												required=''
											/>
										</div>
									</div>
									<div className='col-sm-6'>
										<div className='form-group'>
											<label htmlFor='phone'>
												<i className='fas fa-phone' />
											</label>
											<input
												type='text'
												id='phone'
												name='phone'
												className='form-control'
												defaultValue=''
												placeholder='Phone'
												required=''
											/>
										</div>
									</div>
									<div className='col-sm-6'>
										<div className='form-group'>
											<label htmlFor='faq-email'>
												<i className='far fa-envelope' />
											</label>
											<input
												type='email'
												id='faq-email'
												name='faq-email'
												className='form-control'
												defaultValue=''
												placeholder='Email Address'
												required=''
											/>
										</div>
									</div>
									<div className='col-sm-6 mb-30'>
										<div className='form-group'>
											<select name='subject' id='subject'>
												<option value='Subject'>Subject</option>
												<option value='Instructors'>Instructors</option>
												<option value='Pricing'>Pricing</option>
												<option value='Setting'>Setting</option>
											</select>
										</div>
									</div>
									<div className='col-sm-12'>
										<div className='form-group'>
											<label htmlFor='message'>
												<i className='fas fa-pencil-alt' />
											</label>
											<textarea
												name='message'
												id='message'
												className='form-control'
												rows={4}
												placeholder='Why you would like to discuss'
												required=''
												defaultValue={''}
											/>
										</div>
									</div>
									<div className='col-sm-12'>
										<div className='form-group mb-0 form-btn-label'>
											<button type='submit' className='theme-btn'>
												Send Message <i className='fas fa-arrow-right' />
											</button>
											<div className='custom-control custom-radio'>
												<input
													type='radio'
													className='custom-control-input'
													id='privacy-policy'
													name='privacy'
													required=''
												/>
												<label
													className='custom-control-label'
													htmlFor='privacy-policy'
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
