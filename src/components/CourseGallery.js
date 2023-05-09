/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import CourseList from '../../utils/Courses';

import React from 'react';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';

const Course = ({ title, tag, description, cid, image, lessons }) => {
	return (
		<div className='col-md-4 coach-item-three wow fadeInUp delay-0-2s'>
			<div className='image'>
				<img src={`/assets/images/courses/${image}`} alt='Coach' />
			</div>
			<div className='content'>
				<ul className='coach-footer'>
					<li>
						<i className='fa fa-tag' style={{ color: '#0006' }} />
						<span>{tag}</span>
					</li>
					<li>
						<i className='far fa-file-alt' />
						<span>{lessons} Lessons</span>
					</li>
				</ul>
				<h4 className='pb-0 mb-2'>
					<Link
						href={{
							pathname: 'course-details',
							query: {
								cid,
							},
						}}
					>
						<EllipsisText text={title} length={58} />
					</Link>
				</h4>
				<p>
					<EllipsisText text={description} length={100} />
				</p>
				<div className='author'>
					<Link
						href={{
							pathname: '/courses/course-details',
							query: {
								cid,
							},
						}}
					>
						<a className='theme-btn'>
							View Details <i className='fas fa-arrow-right' />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

const CourseSlider = () => {
	return (
		<section
			className='coach-section-three bg-lighter rel z-1 pt-100 rpt-150 pb-130 rpb-100'
			id='courses'
		>
			<div className='container'>
				<div className='row justify-content-center mb-40'>
					<div className='col-xl-6 col-lg-7 col-md-8'>
						<div className='section-title text-center mb-45'>
							<h2>
								Expand your <span>Blockchain</span> Knowledge
							</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					{CourseList.map((item, index) => (
						<Course
							lessons={item.totalModules}
							title={item.title}
							link='course-details'
							image={item.image}
							key={index}
							tag={item.tag}
							description={item.description}
							cid={item.cid}
						/>
					))}
				</div>
				{/* <div className='row justify-content-center'>
					<Link href='/#contact'>
						<a className='theme-btn style-two'>
							Explore More <i className='fas fa-arrow-right' />
						</a>
					</Link>
				</div> */}
			</div>
		</section>
	);
};

export default CourseSlider;
