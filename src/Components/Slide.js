import { Swiper, SwiperSlide } from 'swiper/react' ;
import SwiperCore, { Autoplay } from 'swiper'
import Helmet from 'react-helmet' ;

import 'swiper/swiper-bundle.css' ;
import Content from './Blog/Content' ;
import { useEffect, useState } from 'react';
import { size } from '../Util/theme' ;

import { connect } from 'react-redux';

SwiperCore.use([Autoplay]) ;

const Slide = ({ data }) => {

  const { tabletL } = size ;

  const [ viewContentNum, setViewContentNum ] = useState(3) ;

  const viewContentNumCheck = innerWidth => {
    if(innerWidth <= tabletL) {
      setViewContentNum(1) ;
    }else if(innerWidth >= tabletL ) {
      setViewContentNum(3) ;
    }
  }

  const onResize = (e) => {
    const { currentTarget : { innerWidth } } = e ;

    viewContentNumCheck(innerWidth) ;
  }
  useEffect(() => {
    const { innerWidth } = window ;
    viewContentNumCheck(innerWidth) ;

    window.addEventListener('resize', onResize, false) ;
    
    return () => {
      window.removeEventListener('resize', onResize, false) ;
    }
  }, []) ;

  return (
    <>
    <Helmet>
      <style>
        {`
          div.swiper-container {
            padding : 10px  0 ;
          }
        `}
      </style>
    </Helmet>
      { 
      <Swiper
            spaceBetween={30}
            slidesPerView={viewContentNum}
            onSlideChange={() => null}
            onSwiper={(swiper) => {}}
            autoplay={true}
          >
            { 
              data.map((content, index) => (<SwiperSlide  key={index} width="300px"><Content content={content}/></SwiperSlide>))
            }
         </Swiper>
      }
    </>
  );
};

export default  connect(
  ({ 
    content : { defaultData }  
   }) => ({
     data : defaultData.slice(0, 9) 
   })
  , null
)(Slide) ;