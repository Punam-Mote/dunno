import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Figure from "react-bootstrap/Figure";

export default class Home extends Component {
	
	render() {
		return (
			<>
				<Figure className="col-lg-2 col-centered">
					<Figure.Image
						width={100}
						height={60}
						alt="171x180"
						src="https://icon-library.net/images/restaurant-icon-png/restaurant-icon-png-7.jpg" roundedCircle
					/>
					<Figure.Caption>
						<h5>Restaurant</h5>
					</Figure.Caption>
				</Figure>

				<Figure className="col-lg-2 col-centered">
					<Figure.Image
						width={100}
						height={60}
						alt="171x180"
						src="https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F9C1-cupcake-512.png" roundedCircle
					/>
					<Figure.Caption>
						<h5>Bakery</h5>
					</Figure.Caption>
				</Figure>

				<Figure className="col-lg-2 col-centered">
					<Figure.Image
						width={100}
						height={60}
						alt="171x180"
						src="https://p.kindpng.com/picc/s/18-186872_icon-food-and-drink-hd-png-download.png" roundedCircle
					/>
					<Figure.Caption>
						<h5>Fast Food</h5>
					</Figure.Caption>
				</Figure>

				<Figure className="col-lg-2 col-centered">
					<Figure.Image
						width={100}
						height={60}
						alt="171x180"
						src="https://w7.pngwing.com/pngs/67/443/png-transparent-food-hamburger-brand-health-logo-homemade-snacks-angle-culture-food.png" roundedCircle
					/>
					<Figure.Caption>
						<h5>Home Made</h5>
					</Figure.Caption>
				</Figure>

				<Figure className="col-lg-2 col-centered">
					<Figure.Image
						width={100}
						height={60}
						alt="171x180"
						src="https://p.kindpng.com/picc/s/179-1793294_cooking-and-preparing-cook-in-bag-hd-png.png" roundedCircle
					/>
					<Figure.Caption>
						<h5>Tutorial</h5>
					</Figure.Caption>
				</Figure>

				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100 img-fluid"
							src="images/carasoul1.jpg"
							alt="First slide"
							style={{ height: '400px' }}
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 img-fluid"
							src="images/carasoul2.jpg"
							alt="Second slide"
							style={{ height: '400px' }}
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="images/carasoul3.jpeg"
							alt="Third slide"
							style={{ height: '400px' }}
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<br /><br />

				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/480/Logo/Web_020520064219.happy_hunch.Dalle.jpg"
					/>
					<Figure.Caption>
						<h5>Dalle Bhaisepati</h5>
					</Figure.Caption>
				</Figure>
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/269/Logo/Web_040620061639.happy_lunch.Fire_and_Ice_Pizzeria.jpg"
					/>
					<Figure.Caption>
						<h5>Fire and Ice Pizzeria</h5>
					</Figure.Caption>
				</Figure>
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/332/Logo/mitrandadhaba-web-listing_081117111411.jpg"
					/>
					<Figure.Caption>
						<h5>Mitra Da Dhaba</h5>
					</Figure.Caption>
				</Figure>
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/1142/Logo/Web_220221091012.listing.Soaltee.jpg"
					/>
					<Figure.Caption>
						<h5>Haadi Biryani</h5>
					</Figure.Caption>
				</Figure>
				<br /><br />
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/384/Logo/web_290121041303.offer.jpg"
					/>
					<Figure.Caption>
						<h5>Burger House</h5>
					</Figure.Caption>
				</Figure>
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/445/Logo/Pizza_090920101900.hut.web.listing.jpeg"
					/>
					<Figure.Caption>
						<h5>Pizza Hut</h5>
					</Figure.Caption>
				</Figure>
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/442/Logo/web_120321051241.offer.jpg"
					/>
					<Figure.Caption>
						<h5>KFC: DurbarMarg</h5>
					</Figure.Caption>
				</Figure>
				<Figure className="col-lg-3 col-centered">
					<Figure.Image
						width={420}
						height={300}
						alt="171x180"
						src="https://foodmandu.com//Images/Vendor/174/Logo/web_offer_150321062453.jpeg"
					/>
					<Figure.Caption>
						<h5>RoadHouse Jhamsikhel</h5>
					</Figure.Caption>
				</Figure>


			</>

		)
	}
}
