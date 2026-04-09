import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function PortofolioSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/cuisinealouer.png"
            alt="https://cuisinealouer.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/cuisinealouer.png"
            alt="https://cuisinealouer.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/billet-doux.png"
            alt="https://billetdoux.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/canebier.png"
            alt="https://lescanebiers.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/lapiscine-paris.png"
            alt="https://www.lapiscine-paris.fr/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/retro-design.png"
            alt="https://www.retro-design.fr/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/moto-dif.png"
            alt="https://www.motodiffusion.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/cibesmed.png"
            alt="https://www.cibesmed.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/ecf.png"
            alt="https://www.ecf-echoppe.com/"
          />
        </SwiperSlide >
      </Swiper >
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/cuisinealouer.png"
            alt="https://cuisinealouer.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/cuisinealouer.png"
            alt="https://cuisinealouer.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/billet-doux.png"
            alt="https://billetdoux.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/canebier.png"
            alt="https://lescanebiers.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/lapiscine-paris.png"
            alt="https://www.lapiscine-paris.fr/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/retro-design.png"
            alt="https://www.retro-design.fr/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/moto-dif.png"
            alt="https://www.motodiffusion.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/cibesmed.png"
            alt="https://www.cibesmed.com/"
          />
        </SwiperSlide >
        <SwiperSlide>
          <ImageWithFallback
            src="images/refs/ecf.png"
            alt="https://www.ecf-echoppe.com/"
          />
        </SwiperSlide >
      </Swiper>
    </>
  );
}

export default PortofolioSwiper;