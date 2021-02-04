// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react' ;

import SwiperCore, { Autoplay } from 'swiper'

import 'swiper/swiper-bundle.css' ;
import { connect } from 'react-redux';
import Content from './Blog/Content' ;
import { useEffect } from 'react';

SwiperCore.use([Autoplay]) ;
 
const Slide = ({ defaultData }) => {

  useEffect(() => {
    const swiperContainer = document.querySelector('div.swiper-container') ;
  
    swiperContainer.style.padding = "10px 0 10px 0" ;
  }, [])

  return (
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => null}
        onSwiper={(swiper) => {}}
        autoplay={true}
      >
      { 
        defaultData.map((data, index) => (<SwiperSlide  key={index} width="300px"><Content content={data}/></SwiperSlide>))
      }
      </Swiper>
  );
};

function mapStateToProps(state) {
    const { 
        content : { 
            defaultData 
        } 
    } = state ;
    return {
        defaultData
    } ;
} ;

export default connect(mapStateToProps, null)(Slide) ;