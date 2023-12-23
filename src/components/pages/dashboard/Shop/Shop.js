import ShopCard from '../../../Elements/ShopCard/ShopCard';
import './Shop.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react"
import tenue from '../../../../data/kits.json';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function Shop(){
    const kits= tenue.kits;
    return<>
        <div className='shop'>
            <div className='shop-title'>
                <h3>Shop</h3>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 3,
                depth: 300,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                loop={true}
            >
                { kits.map((kit,index)=>(
                    <SwiperSlide className='shop-slide' key={index}>
                        <ShopCard kit={kit.Kit} desc={kit.description} price={kit.Price} link={kit.Link}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
}