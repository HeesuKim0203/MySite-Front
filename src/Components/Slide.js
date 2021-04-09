import { Swiper, SwiperSlide } from 'swiper/react' ;

import SwiperCore, { Autoplay } from 'swiper'

import 'swiper/swiper-bundle.css' ;
import { connect } from 'react-redux';
import Content from './Blog/Content' ;
import { useEffect, useState } from 'react';
import { size } from '../Util/theme' ;

SwiperCore.use([Autoplay]) ;

const Slide = ({ defaultData }) => {

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

    const swiperContainer = document.querySelector('div.swiper-container') ;
    swiperContainer.style.padding = "10px 0 10px 0" ;

    viewContentNumCheck(innerWidth) ;

    window.addEventListener('resize', onResize, false) ;

    return () => {
      window.removeEventListener('resize', onResize, false) ;
    }
  }, []) ;

  return (
      <Swiper
        spaceBetween={30}
        slidesPerView={viewContentNum}
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