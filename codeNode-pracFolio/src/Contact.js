import React from 'react';
import Nav from './Nav';

export default class Contact extends React.Component {
	render() {
		return (
			<>
				<Nav />
				<section className="contact-section">
					<main className="wrapper">
						<div>This is Contact Page</div>
						<form action="">
							<input placeholder="name" type="text" name="name" />
							<input placeholder="email" type="text" name="email" />
							<textarea placeholder="Send a message.." rows="4" cols="50">
								
							</textarea>
							<input type="submit" value="Submit" />
						</form>
					</main>
				</section>

			</>
		)
	}
}