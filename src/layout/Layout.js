import { Fragment, useEffect } from 'react';
import ImageView from '../components/ImageView';
import VideoPopup from '../components/VideoPopup';
import { animation } from '../utils';
import Footer from './Footer';
import Header from './Header';
// import Sidebar from './Sidebar';

const Layout = ({ children, header, footer, newsletter, topbar }) => {
	useEffect(() => {
		animation();
	}, []);

	return (
		<Fragment>
			<VideoPopup />
			<ImageView />
			<div className='page-wrapper'>
				{/* Preloader */}
				{/* <div className="preloader" /> */}
				{/* main header */}
				<Header header={header} topbar={topbar} />
				{/*Form Back Drop*/}
				{/* <Sidebar /> */}
				{/*End Hidden Sidebar */}
				{children}
				{/* Footer Area Start */}
				<Footer footer={footer} newsletter={newsletter} />
				{/* Footer Area End */}
			</div>
		</Fragment>
	);
};
export default Layout;
