"use client";
import Slider from "react-slick";

const BrandOne = () => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: { slidesToShow: 6, arrows: false },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 5, arrows: false },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 4, arrows: false },
      },
      {
        breakpoint: 424,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 359,
        settings: { slidesToShow: 2, arrows: false },
      },
    ],
  };
  return (
    <div
      className='brand wow fadeInUpBig'
      data-wow-duration='1s'
      data-wow-delay='.5s'
    >
      <div className='container container--lg'>
        <div className='brand-box py-80 px-16 bg-main-25 border border-neutral-30 rounded-16'>
          <h5 className='mb-40 text-center text-neutral-500'>
            Telah dipercaya oleh 
          </h5>
          <div className='container'>
            <Slider {...settings} className='brand-slider'>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image2.png' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src= 'assets/images/thumbs/brand-image1.png' alt='' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
