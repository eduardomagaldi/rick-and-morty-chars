import './style.scss';

import logo from "./kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5.4984654015228397559287.png";
import title from "./../../rick-and-morty.svg";

import React, { useState, useEffect } from 'react';

function App(props) {
	const [activeObj, setActiveObj] = useState({});

	useEffect(() => {
		console.log('use effect 1');
		window.addEventListener(
			'scroll',
			throttle(debounce(handleScroll, 300), 300),
		);
	}, []);

	useEffect(() => {
		console.log('use effect 2');
	}, [activeObj]);

	function handleScroll($event) {
		const scrollMap = {
			'100-299': 'negative__word--rick',
			'300-599': 'negative__word--morty',
			'600-899': 'negative__word--complete',
		};

		const scrollY = window.scrollY;

		for (const range in scrollMap) {
			const splitRange = range.split('-');
			const min = parseInt(splitRange[0], 10);
			const max = parseInt(splitRange[1], 10);

			if (scrollY >= min && scrollY <= max) {
				console.log('set class');

				const newActiveObj = {};
				newActiveObj[scrollMap[range]] = 'active';

				setActiveObj(newActiveObj);
				break;
			} else {
				setActiveObj({});
			}
		}
	}

	return <>
		<div className="app">
			{/* <div style={{ position: 'fixed', top: 0 }}>{JSON.stringify(activeObj)}</div> */}

			<section className="section__title">
				<div className="section__title__wrapper_img_title">
					<img
						src={title}
						className="img_title img_title__shadow"
						alt="Rick and Morty"
						width="600"
					/>
					<img
						src={title}
						className="img_title img_title__shadow"
						alt="Rick and Morty"
						width="600"
					/>
					<img
						src={title}
						className="img_title"
						alt="Rick and Morty"
						width="600"
					/>
				</div>

				<div>
					<h1>Character Catalog</h1>
					<small>By <a href="https://www.eduardomagaldi.com.br/eng">Eduardo Magaldi</a></small>
				</div>
			</section>

			<div className="wrapper_img">

				<img src={logo} className="img_main" alt="Rick and Morty with Portal" />
			</div>

			<div className={'negative__word negative__word--complete active ' + activeObj['negative__word--complete']}></div>
			{/* <div className={'negative__word negative__word--rick ' + activeObj['negative__word--rick']}></div>
			<div className={'negative__word negative__word--and ' + activeObj['negative__word--and']}></div>
			<div className={'negative__word negative__word--morty ' + activeObj['negative__word--morty']}></div> */}

			<div className="content__wrapper__icon_mouse">
				<div className="content__icon_mouse"></div>
				<div className="icon_mouse__arrow"></div>
			</div>

			<div className="wrapper__content">
				<div className="content">
					<div className="alert">
						<h2>No actual content here?</h2>
						<h3>Maybe you can check <a rel="nofollow" target="_blank" href="https://60453ff2ac1bd37523b45c0f--focused-brattain-bc8c35.netlify.app/1">Game of Thrones Characters</a> done by me some months ago, in Vue.js.</h3>
					</div>

					<div className="card_char">
						<div className="card_char__image"></div>

						<div className="card_char__wrapper_info">
							<h2>Character Name</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>

					<div className="card_char">
						<div className="card_char__image"></div>

						<div className="card_char__wrapper_info">
							<h2>Character Name</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>

					<div className="card_char">
						<div className="card_char__image"></div>

						<div className="card_char__wrapper_info">
							<h2>Character Name</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>

					<div className="card_char">
						<div className="card_char__image"></div>

						<div className="card_char__wrapper_info">
							<h2>Character Name</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>

					<div className="card_char">
						<div className="card_char__image"></div>

						<div className="card_char__wrapper_info">
							<h2>Character Name</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default App;

function debounce(func, wait = 100, immediate) {
	let timeout;

	return (...args) => {
		const later = () => {
			timeout = null;

			if (!immediate) {
				func(...args);
			}
		};

		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func(...args);
		}
	};
}

function throttle(fn, wait) {
	let isCalled = false;

	return function (...args) {
		if (!isCalled) {
			fn(...args);

			isCalled = true;

			setTimeout(function () {
				isCalled = false;
			}, wait);
		}
	};
}
