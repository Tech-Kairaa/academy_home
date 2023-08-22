/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

const Index3Slider = () => {
	const [active, setActive] = useState(1);
	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prevState) => (active == 3 ? 1 : prevState + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, [active]);
	console.log(active);
	return (
		<section className='slider-section bg-dark'>
			<div className='main-slider'>
				<div
					className={`slider-item ${active == 1 ? 'slick-active' : ''}`}
					style={{ backgroundImage: 'url(/assets/images/slider/slide1.jpg)' }}
				>
					<div className='container'>
						<div className='slider-content'>
							<span className='sub-title-three'>
								Welcome to <span>Wellearn</span>
							</span>
							<h2>Build Bright Life? Learn Many Things With Wellearn</h2>
							<div className='slider-btns'>
								<a href='#' className='theme-btn style-four'>
									Get started <i className='fas fa-arrow-right' />
								</a>
								<a
									href='https://www.youtube.com/watch?v=9Y7ma241N8k'
									className='mfp-iframe slider-video-play'
								>
									<i className='fas fa-play' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`slider-item ${active == 2 ? 'slick-active' : ''}`}
					style={{ backgroundImage: 'url(/assets/images/slider/slide2.jpg)' }}
				>
					<div className='container'>
						<div className='slider-content'>
							<span className='sub-title-three'>
								Welcome to <span>Wellearn</span>
							</span>
							<h2>Build Bright Life? Learn Many Things With Wellearn</h2>
							<div className='slider-btns'>
								<a href='#' className='theme-btn style-four'>
									Get started <i className='fas fa-arrow-right' />
								</a>
								<a
									href='https://www.youtube.com/watch?v=9Y7ma241N8k'
									className='mfp-iframe slider-video-play'
								>
									<i className='fas fa-play' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`slider-item ${active == 3 ? 'slick-active' : ''}`}
					style={{ backgroundImage: 'url(/assets/images/slider/slide3.jpg)' }}
				>
					<div className='container'>
						<div className='slider-content'>
							<span className='sub-title-three'>
								Welcome to <span>Wellearn</span>
							</span>
							<h2>Build Bright Life? Learn Many Things With Wellearn</h2>
							<div className='slider-btns'>
								<a href='#' className='theme-btn style-four'>
									Get started <i className='fas fa-arrow-right' />
								</a>
								<a
									href='https://www.youtube.com/watch?v=9Y7ma241N8k'
									className='mfp-iframe slider-video-play'
								>
									<i className='fas fa-play' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='pagingInfo'>
				<span className='pagingStatus'>03</span>
				<span className='separator'>/</span>
				<span className='pagingCount'>0{active}</span>
			</div>
			<span className='bg-text'>Education</span>
			<img
				className='circle-two'
				src='/assets/images/shapes/circle-one.png'
				alt='Circle'
			/>
			<img
				className='circle-one'
				src='/assets/images/shapes/circle-three.png'
				alt='Circle'
			/>
		</section>
	);
};
export default Index3Slider;
