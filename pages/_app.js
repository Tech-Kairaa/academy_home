import { Fragment } from 'react';
import 'animate.css';
import '../styles/globals.css';
import '../public/assets/css/font-awesome-5.9.0.min.css';
import '../public/assets/css/magnific-popup.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/slick.min.css';
import '../public/assets/css/style.css';
import { Provider } from 'react-redux';
import store from '../providers/store';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Provider store={store}>
				<Component {...pageProps} />
				<Toaster
					position='bottom-right'
					toastOptions={{
						duration: 2500,

						success: {
							className: 'text-bg-success',
						},
						error: {
							className: 'text-bg-danger',
						},
					}}
					containerClassName='mb-100 me-4'
				/>
			</Provider>
		</Fragment>
	);
}

export default MyApp;
