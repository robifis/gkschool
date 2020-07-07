import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className='pt-3 fixed-bottom bg-dark page-footer font-small white'>
				<div className='row'>
					<div className='col-5' />
					<div className='col-2'>
						<h3 className='small text-center text-white'>Sign Up</h3>
						<form className='input-group'>
							<input
								type='text'
								className='form-control mx-2 form-control-sm'
								placeholder='Your email'
								aria-label='Your email'
								aria-describedby='basic-addon2'
							/>
							<div className='input-group-append'>
								<button className='btn btn-sm btn-danger my-0' type='button'>
									Sign up
								</button>
							</div>
						</form>
					</div>
					<div className='col-5' />
				</div>
				<div className='footer-copyright text-white text-center py-3'>
					© 2020 Copyright:
					<a className='text-white ml-1' href='https://example.com/'>
						GKSchool.com
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
