import { useState } from 'react';
import Accordion from '../elements/Accordion';
import UseImage from './UseImage';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const CourseContent = ({ id, course, coupon, classInfo }) => {
	const handlePlayButton = () => toast.info('Play after purchased!');
	
	return (
		<div className='col-8'>
			<div className='course-details-content'>
				<UseImage
					cid={id}
					filename={course?.images.banner}
					className='w-100 mb-30 rounded-3'
				/>
				<div className='d-inline-flex gap-3 mb-30'>
					<span className='badge rounded-pill text-bg-secondary'>
						Last updated {moment(course?.updatedAt).fromNow()}
					</span>
					{coupon && (
						<span className='badge rounded-pill text-bg-primary'>
							{coupon.discount}% OFF
						</span>
					)}
				</div>
				<h2>{course?.title}</h2>
				<h4 className='text-secondary fw-normal'>{course?.subtitle}</h4>
				<div
					dangerouslySetInnerHTML={{ __html: course.description }}
					className='pt-50 course-description'
				/>

				<h3 className='mt-4'>Course content</h3>
				<div className='mt-30'>
					<div className='d-inline-flex gap-3 mb-30'>
						<span className='badge rounded-pill text-bg-secondary'>
							Sections : {classInfo.sections}
						</span>
						<span className='badge rounded-pill text-bg-secondary'>
							Videos : {classInfo.videos}
						</span>
						<span className='badge rounded-pill text-bg-secondary'>
							Duration : {classInfo.duration}
						</span>
					</div>
					<Accordion>
						{course?.content.map((section, index) => (
							<Accordion.Item title={section.title} key={index}>
								{section?.videos.map((video, index) => (
									<ul key={index}>
										<li className='d-flex justify-content-between align-items-center py-2'>
											{video.title}
											<button
												className='bg-transparent text-secondary'
												onClick={handlePlayButton}
											>
												<em className='bi bi-play-circle me-2'></em>
												<span>
													{moment.utc(video.duration * 1000).format('mm:ss')}
												</span>
											</button>
										</li>
									</ul>
								))}
							</Accordion.Item>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};
export default CourseContent;

{
	/* <h3>Student Feedback</h3>
    <div className='student-feedback pt-10 wow fadeInUp delay-0-2s'>
        <div className='row'>
            <div className='col-sm-5'>
                <div className='student-average-feedback bg-green text-center text-white'>
                    <b>5.0</b>
                    <div className='ratting mb-10'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <h6>Total 1 Rating</h6>
                </div>
            </div>
            <div className='col-sm-7 align-self-center'>
                <div className='student-feedback-details'>
                    <div className='student-feedback-author mb-20'>
                        <img
                            src='/assets/images/coachs/feedback-author.jpg'
                            alt='Authro'
                        />
                        <div className='content'>
                            <h4>Lucius D. Thomas</h4>
                            <span className='designations'>
                                IT Students (Basic)
                            </span>
                        </div>
                    </div>
                    <div className='ratting-total'>
                        <div className='ratting-total-item'>
                            <div className='ratting mb-10'>
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <span>(5)</span>
                            </div>
                            <span className='ratting-bar'>
                                <span style={{ width: '100%' }} />
                            </span>
                            <span className='ratting-number'>1 Rating</span>
                        </div>
                        <div className='ratting-total-item'>
                            <div className='ratting mb-10'>
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star' />
                                <span>(4)</span>
                            </div>
                            <span className='ratting-bar'>
                                <span style={{ width: 0 }} />
                            </span>
                            <span className='ratting-number'>0 Rating</span>
                        </div>
                        <div className='ratting-total-item'>
                            <div className='ratting mb-10'>
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <span>(3)</span>
                            </div>
                            <span className='ratting-bar'>
                                <span style={{ width: 0 }} />
                            </span>
                            <span className='ratting-number'>0 Rating</span>
                        </div>
                        <div className='ratting-total-item'>
                            <div className='ratting mb-10'>
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <span>(2)</span>
                            </div>
                            <span className='ratting-bar'>
                                <span style={{ width: 0 }} />
                            </span>
                            <span className='ratting-number'>0 Rating</span>
                        </div>
                        <div className='ratting-total-item'>
                            <div className='ratting mb-10'>
                                <i className='fas fa-star selected' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <span>(1)</span>
                            </div>
                            <span className='ratting-bar'>
                                <span style={{ width: 0 }} />
                            </span>
                            <span className='ratting-number'>0 Rating</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>*/
}
