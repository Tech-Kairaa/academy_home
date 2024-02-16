import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return (
		<div className='course-sidebar rmb-55'>
			<div className='widget widget-search wow fadeInUp delay-0-2s'>
				<form onSubmit={(e) => e.preventDefault()} action='#'>
					<input type='text' placeholder='Search Here' required='' />
					<button type='submit' className='searchbutton fa fa-search' />
				</form>
			</div>
			<div className='widget widget-menu wow fadeInUp delay-0-4s'>
				<h4 className='widget-title'>Category</h4>
				<ul>
					<li>
						<Link href='/course-list'>
							<a>Business Coach </a>
						</Link>{' '}
						<span>(25)</span>
					</li>
					<li>
						<Link href='/course-list'>
							<a>Life Coach </a>
						</Link>{' '}
						<span>(07)</span>
					</li>
					<li>
						<Link href='/course-list'>
							<a>Health Coach </a>
						</Link>{' '}
						<span>(12)</span>
					</li>
					<li>
						<Link href='/course-list'>
							<a>Web Design </a>
						</Link>{' '}
						<span>(55)</span>
					</li>
					<li>
						<Link href='/course-list'>
							<a>Web Development </a>
						</Link>{' '}
						<span>(14)</span>
					</li>
					<li>
						<Link href='/course-list'>
							<a>SEO Optimizations </a>
						</Link>{' '}
						<span>(30)</span>
					</li>
					<li>
						<Link href='/course-list'>
							<a>Digital Analysis </a>
						</Link>{' '}
						<span>(18)</span>
					</li>
				</ul>
			</div>

			<div className='widget widget-radio wow fadeInUp delay-0-2s'>
				<h4 className='widget-title'>Filter By Price</h4>
				<form
					onSubmit={(e) => e.preventDefault()}
					className='newsletter-form'
					action='#'
				>
					<div className='custom-control custom-radio'>
						<input
							type='radio'
							className='custom-control-input'
							id='all-course'
							name='filter'
							defaultChecked=''
						/>
						<label className='custom-control-label' htmlFor='all-course'>
							Show All Courses <span>(205)</span>
						</label>
					</div>
					<div className='custom-control custom-radio'>
						<input
							type='radio'
							className='custom-control-input'
							id='premium-course'
							name='filter'
						/>
						<label className='custom-control-label' htmlFor='premium-course'>
							Premium Courses <span>(159)</span>
						</label>
					</div>
					<div className='custom-control custom-radio'>
						<input
							type='radio'
							className='custom-control-input'
							id='free-course'
							name='filter'
						/>
						<label className='custom-control-label' htmlFor='free-course'>
							Free Courses <span>(65)</span>
						</label>
					</div>
				</form>
			</div>
			<div className='widget widget-ratting wow fadeInUp delay-0-2s'>
				<h4 className='widget-title'>Filter By Rating</h4>
				<ul>
					<li>
						<div className='ratting'>
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
						</div>
						<span>(35)</span>
					</li>
					<li>
						<div className='ratting'>
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star' />
						</div>
						<span>(28)</span>
					</li>
					<li>
						<div className='ratting'>
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star' />
							<i className='fas fa-star' />
						</div>
						<span>(23)</span>
					</li>
					<li>
						<div className='ratting'>
							<i className='fas fa-star checked' />
							<i className='fas fa-star checked' />
							<i className='fas fa-star' />
							<i className='fas fa-star' />
							<i className='fas fa-star' />
						</div>
						<span>(4)</span>
					</li>
					<li>
						<div className='ratting'>
							<i className='fas fa-star checked' />
							<i className='fas fa-star' />
							<i className='fas fa-star' />
							<i className='fas fa-star' />
							<i className='fas fa-star' />
						</div>
						<span>(0)</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
