import './style.scss';

import logo from "./kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5.4984654015228397559287.png";
import neg from "./../../rick-and-morty-negative.svg";

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
			<div style={{ position: 'fixed', top: 0 }}>{JSON.stringify(activeObj)}</div>

			<img src={logo} className="img_main" alt="Rick and Morty with Portal" />
			{/* <img src={neg} className="img_main negative" alt="Rick and Morty with Portal" /> */}

			<div className={'negative__word negative__word--complete ' + activeObj['negative__word--complete']}></div>
			<div className={'negative__word negative__word--rick ' + activeObj['negative__word--rick']}></div>
			<div className={'negative__word negative__word--and ' + activeObj['negative__word--and']}></div>
			<div className={'negative__word negative__word--morty ' + activeObj['negative__word--morty']}></div>

			<div className="content__wrapper__icon_mouse">
				<div className="content__icon_mouse"></div>
				<div className="icon_mouse__arrow"></div>
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
