import './MainFooter.css';

export default function MainFooter() {
	return (
		<footer id="footer">
			{/* <div>LOGO</div> */}
			<div id="footer-credit">
				<p>Made by</p>
				<ul>
					<li>
						 <a href="https://www.linkedin.com/in/justin-park-aus/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
       					  Just Park
      					</a> |
	  				</li>
					<li>
						<a href="https://www.linkedin.com/in/mika-yokawa/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
						  Mika Yokawa
      					</a> |
					</li>
					<li><a href="https://www.linkedin.com/in/zahra-shirazi1/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
						  zahra Shirazi
      					</a> |</li>
				</ul>
			</div>
		</footer>
	)
}