import { Fragment } from 'react';
import 'animate.css';
import '../styles/globals.css';
import '@/assets/css/font-awesome-5.9.0.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/slick.min.css';
import '@/assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import store from '@/providers/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Provider store={store}>
				<Component {...pageProps} />
				<ToastContainer position='bottom-left' />
			</Provider>
		</Fragment>
	);
}

export default MyApp;
