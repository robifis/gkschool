import React from 'react';

const Team = () => {
	return (
		<div className='coaches d-flex align-items-center justify-content-center'>
			<div className='container'>
				<h1 className='text-center py-5'>Meet the Team</h1>
				<div className='row'>
					<div className='col-4'>
						<div className='card'>
							<img
								src='https://pbs.twimg.com/profile_images/1164891588142800897/7fHOEenW_400x400.jpg'
								className='card-img-top teamImg'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Barry Richardson</h5>
								<h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a href='#' className='text-success card-link'>
									Find out more
								</a>
								<div className='mt-2'>
									<a href='!#'>
										<i className='mr-2 h1 fa fa-instagram' />
									</a>
									<a href='!#'>
										<i className='fa mr-2 h1 fa-twitter-square' />
									</a>
									<a href='!#'>
										<i className='fa mr-2 h1 fa-facebook-square' />
									</a>
									<a href='!#'>
										<i className='h1 fa mr-2 h1 fa-linkedin-square' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-4'>
						<div className='card'>
							<img
								src='https://www.mansfieldtown.net/api/image/cropandgreyscale/aa0db38c-07b8-4ecf-a835-1a7a795078a4/?preset=square&greyscale=false'
								className='card-img-top teamImg'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Ian Pledger</h5>
								<h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a href='#' className='text-success card-link'>
									Find out more
								</a>
								<div className='mt-2'>
									<a href='!#'>
										<i className='h1 mr-2 fa fa-instagram' />
									</a>
									<a href='!#'>
										<i className='h1 fa mr-2 fa-twitter-square' />
									</a>
									<a href='!#'>
										<i className='h1 fa mr-2 fa-facebook-square' />
									</a>
									<a href='!#'>
										<i className='h1 fa mr-2 fa-linkedin-square' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-4'>
						<div className='card'>
							<img
								src='https://i2-prod.liverpoolecho.co.uk/incoming/article11777157.ece/ALTERNATES/s615b/JS97498830.jpg'
								className='card-img-top teamImg'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Scott Tynan</h5>
								<h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a href='#' className='text-success card-link'>
									Find out more
								</a>
								<div className='mt-2'>
									<a href='!#'>
										<i className='h1 mr-2 fa fa-instagram' />
									</a>
									<a href='!#'>
										<i className='h1 fa mr-2 fa-twitter-square' />
									</a>
									<a href='!#'>
										<i class='fa h1 mr-2 fa-facebook-square' />
									</a>
									<a href='!#'>
										<i class='fa h1 mr-2 fa-linkedin-square' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
