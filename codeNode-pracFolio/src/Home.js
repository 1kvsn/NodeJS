import React from 'react';
import Nav from './Nav';

export default class Home extends React.Component {
	render() {
		return (
			<>
				<Nav />
				<section className="home-section">
					<main className="wrapper">
						<div>This is homepage</div>
					</main>
					
				</section>

			</>
		)
	}
}