import { Fragment } from 'react';
import 'animate.css';
import '../styles/globals.css';
import '@/assets/css/font-awesome-5.9.0.min.css';
import '@/assets/css/magnific-popup.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/slick.min.css';
import '@/assets/css/style.css';
import { Provider } from 'react-redux';
import store from '@/providers/store';
import { Toaster } from 'react-hot-toast';
import Authenticate from '@/components/Authenticate';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Provider store={store}>
				<Authenticate>
					<Component {...pageProps} />
				</Authenticate>
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
