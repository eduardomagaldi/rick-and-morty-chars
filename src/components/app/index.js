import './style.scss';
// import Loader from '../loader';

import logo from "./kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5.4984654015228397559287.png";
import neg from "./../../rick-and-morty-negative.svg";


function App(props) {
	return <>
		<div className="app">
			<img src={logo} className="img_main" alt="Rick and Morty with Portal" />
			{/* <img src={neg} className="img_main negative" alt="Rick and Morty with Portal" /> */}

			{/* <div className="negative__word negative__word--rick"></div> */}
			{/* <div className="negative__word negative__word--and"></div> */}
			{/* <div className="negative__word negative__word--morty"></div> */}

			<div className="content__wrapper__icon_mouse">
				<div className="content__icon_mouse"></div>
			</div>

			<div className="wrapper__content">
				<div className="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>

	</>;
}

export default App;

