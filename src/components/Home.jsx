import React from 'react';

const Home = () => {
	return (
		<div>
			<div id='header' className='d-flex align-items-center justify-content-center'>
				<div className='container'>
					<h1 className='display-1'>Welcome</h1>
					<h2 className='display-5'>Please sign up below!</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum nesciunt quia in id,
						praesentium deleniti similique iure odit dignissimos vero libero, maiores nulla quas autem!
						Ullam enim dignissimos atque dolore eligendi similique quis deserunt sint culpa, nobis vitae
						maiores nisi quos eveniet dicta voluptatum odit alias officia eaque obcaecati.
					</p>
					<div className='my-5'>
						<h3>Sign up to stay up to date</h3>
						<div className='form-group'>
							<input type='email' placeholder='Enter your email address' className='form-control' />
							<button className='btn btn-danger my-3'>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
