import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar navbar-dark navbar-expand-lg bg-dark fixed-top'>
				<span className='navbar-brand mb-0 h1'>
					<i className='fa fa-futbol-o mr-2' aria-hidden='true' />
					GK School
				</span>
				<div className='mx-auto d-flex justify-content-center'>
					<div className='navbar-nav d-flex justify-content-center w-100'>
						<Link className='nav-link nav-link text-white' to='/'>
							<button type='button' className='btn btn-dark'>
								<i className='fa fa-home mr-2' aria-hidden='true' />
								Home
							</button>
						</Link>
						<Link className='nav-link nav-link text-white' to='/about'>
							<button type='button' className='btn btn-dark'>
								<i className='fa fa-question mr-2' aria-hidden='true' />
								About
							</button>
						</Link>
						<Link className='nav-link nav-link text-white' to='/contact'>
							<button type='button' className='btn btn-dark'>
								<i className='fa fa-envelope-o mr-2' aria-hidden='true' />
								Contact
							</button>
						</Link>
						<Link className='nav-link nav-link text-white' to='/pricing'>
							<button type='button' className='btn btn-dark'>
								<i className='mr-2 fa fa-gbp' />
								Pricing
							</button>
						</Link>
						<Link className='nav-link nav-link text-white' to='/shop'>
							<button type='button' className='btn btn-dark'>
								<i className='fa fa-cart-plus mr-2' aria-hidden='true' />
								Shop
							</button>
						</Link>
						<Link className='nav-link nav-link text-white' to='/team'>
							<button type='button' className='btn btn-dark'>
								<i className='mr-2 fa fa-user-o' />
								Coaches
							</button>
						</Link>
					</div>
				</div>
				<Link className='nav-link nav-link text-white' to='/login'>
					<button type='button' className='btn btn-success'>
						Login
					</button>
				</Link>
				<Link className='nav-link nav-link text-white' to='/register'>
					<button type='button' className='btn btn-danger'>
						Register
					</button>
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
