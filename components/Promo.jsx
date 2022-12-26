import React, { Component } from 'react'
import Image from 'next/image';
import promo from '../public/assets/promo.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default class NextJsCarousel extends Component {
render() {
	return (
		<div>
			<Carousel>
				<div>
					<Image src={promo} alt="image1"/>
				</div>
				<div>
					<Image src={promo} alt="image2" />
				</div>
				<div>
					<Image src={promo} alt="image3"/>
				</div>
			</Carousel>
		</div>
	);
}
};
