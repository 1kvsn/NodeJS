import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<>
				<section className="wrapper">
					<nav className="nav">
						<div className="git-link">
							<a href="/">kvsn</a>
						</div>
						<div className="nav-links">
							<NavLink>
								<p>Projects</p>
							</NavLink>
							<NavLink to="/contact">
								<p>Contact</p>
							</NavLink>
						</div>
					</nav>
				</section>
			</>
		)
	}
}