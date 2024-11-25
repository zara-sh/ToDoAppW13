import './MainHeader.css';

export default function MainHeader() {
	return (
		<header id='header'>
			<div id="header-display">
				<div className='logo'>
					<div>TT</div>
				</div>
				<h1>Temp Heading</h1>
			</div>
			<nav id="header-nav">
				<button>Un-functional Add Task Button</button>
				<ul>
					<li><a href="#main">Top</a></li>
					<li><a href="#footer">Credit</a></li>
				</ul>
			</nav>
		</header>
	)
}