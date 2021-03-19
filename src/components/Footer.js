import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
	return (
	  <div className="main-footer">
		<div className="container">
		  <div className="row">
			{/* Column1 */}
			<div className="col">
			  <h6>We're MERO FOOD DELIVERY</h6>
			  <h7 className="list-unstyled">
			 	<li><Link to='/' className='text-white'>About US</Link></li>
			 	<li><Link to='/' className='text-white'>Available Areas</Link></li>
			 	<li><Link to='/' className='text-white'>Delivery Charges</Link></li>
				
			  </h7>
			</div>
			{/* Column2 */}
			<div className="col">
			  <h4>Get Help?</h4>
			  <ui className="list-unstyled">
				<li>How To Order?</li>
				<li>FAQs</li>
				<li>Contact Us</li>
			  </ui>
			</div>
			{/* Column3 */}
			<div className="col">
			  <h5>Call Us</h5>
			  <ui className="list-unstyled">
				<li>Kathmandu : 4444176, 9840006776</li>
				<li>Pokhara: 4444864, 9847668464</li>
			  </ui>
			</div>
		  </div>
		  <hr />
		  <div className="row">
			<p className="col-sm">
			  &copy;{new Date().getFullYear()} MERO FOOD DELIVERY | All rights reserved |
			  Terms Of Service | Privacy
			</p>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default Footer;
  