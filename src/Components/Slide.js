import { Swiper, SwiperSlide } from 'swiper/react' ;
import SwiperCore, { Autoplay } from 'swiper' ;

import 'swiper/swiper-bundle.css' ;
import Content from './Blog/Content' ;
import { size } from '../Util/theme' ;

import { connect } from 'react-redux';

SwiperCore.use([Autoplay]) ;

const breakpoints = {
  [ size.laptop ] : {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  [ size.tabletL ] : {
    slidesPerView: 3,
  },
  [ size.tabletS ] : {
    slidesPerView: 1,
  },
}

const Slide = ({ data }) => (
  <Swiper
        onSlideChange={() => null}
        onSwiper={(swiper) => {}}
        autoplay={true}
        breakpoints={breakpoints}
      >
        { 
          data.map((content, index) => (<SwiperSlide  key={index} width="300px"><Content content={content}/></SwiperSlide>))
        }
  </Swiper>
);

export default  connect(
  ({ 
    content : { defaultData }  
   }) => ({
     data : defaultData.slice(0, 9) 
   })
  , null
)(Slide) ;