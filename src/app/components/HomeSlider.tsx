import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
	const [banners, setBanners] = useState([
		{
			imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg',
		},
		{
			imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg',
		},
	]);

	const width = window.innerWidth;
	const height = window.innerHeight;

	return (
		<div className='w-full'>
			<Swiper rewind={true} navigation={true} modules={[Navigation]} className='mySwiper'>
				{banners.map((banner, index) => {
					return (
						<SwiperSlide key={index}>
							<Image
								src={banner.imgUrl}
								alt=''
								width={width}
								height={height / 2}
								style={{
									objectFit: 'cover',
								}}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default HomeSlider;
