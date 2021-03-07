import './style.scss';
import rickAndMortyWithPortal from "./kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5.4984654015228397559287.png";
import title from "./../../rick-and-morty.svg";

function App(props) {
	return <>
		<div className="app">
			<SectionTitle />
			<ImageMain />
			<IconMouse />
			<Content />
		</div>
	</>;
}

function ImageMain() {
	return <>
		<div className="wrapper_img">
			<img src={rickAndMortyWithPortal} className="img_main" alt="Rick and Morty with Portal" />
		</div>
	</>
}

function IconMouse() {
	return <>
		<div className="content__wrapper__icon_mouse">
			<div className="content__icon_mouse"></div>
			<div className="icon_mouse__arrow"></div>
		</div>
	</>
}

function SectionTitle() {
	return <>
		<section className="section__title">
			<BadgeImdb />

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
				<small>By <a href="https://www.eduardomagaldi.com.br/eng" rel="noreferrer">Eduardo Magaldi</a></small>
			</div>
		</section>
	</>;
}

function Alert() {
	return <>
		<div className="alert">
			<h2>No actual content here?</h2>
			<h3>Maybe you can check <a rel="noreferrer" target="_blank" href="https://60453ff2ac1bd37523b45c0f--focused-brattain-bc8c35.netlify.app/1">Game of Thrones Characters</a> done by me some months ago, in Vue.js. :-) And here is the <a href="https://github.com/eduardomagaldi/got-guys" rel="noreferrer" target="_blank">repo</a>.</h3>
		</div>
	</>;
}

function Content() {
	return <>
		<div className="wrapper__content">
			<div className="content">
				<Alert />

				<CardChar />
				<CardChar />
				<CardChar />
				<CardChar />
			</div>
		</div>
	</>
}

function CardChar() {
	return <>
		<div className="card_char">
			<div className="card_char__image"></div>

			<div className="card_char__wrapper_info">
				<h2>Character Name</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
	</>
}

function BadgeImdb() {
	return <>
		<span
			className="imdbRatingPlugin"
			data-user="ur130126224"
			data-title="tt2861424"
			data-style="p2"
		>
			<a
				href="https://www.imdb.com/title/tt2861424/?ref_=plg_rt_1"
			>
				<img
					src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png"
					alt="Rick e Morty (2013) on IMDb"
				/>
			</a>
		</span>
	</>
}

export default App;
