import styled from "styled-components";
import {WinnerItem} from "./WinnerItem";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay, Mousewheel } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./carousel-winners.scss";

SwiperCore.use([Mousewheel, Autoplay]);

const WinnersListBase = ({className, items}) => {


    return (
        <div className={className}>
            <Swiper
                spaceBetween={30}
                speed={2500}
                direction={'vertical'}
                className="mySwiper"
                slidesPerView={10}
                loop={true}
                mousewheel={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: false
                }}
                onTouchStart={e => {
                    e.autoplay.stop()
                    // e.$wrapperEl[0].classList.add('swiper-touched')
                }}
                onTouchEnd={e => {
                    // e.$wrapperEl[0].classList.remove('swiper-touched')
                    e.autoplay.start()
                }}
            >
                {
                    items.map(item => {
                        return (
                            <SwiperSlide key={item}>
                                <WinnerItem
                                    winnerId={item}
                                    onModalClose={() => {
                                        // sliderObject.slickPlay()
                                    }}
                                />
                            </SwiperSlide>)
                    })
                }
            </Swiper>
        </div>
    )
}

export const WinnersList = styled(WinnersListBase)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 130px);
  font-size: 2rem;
  
  .swiper-wrapper {
    transition-timing-function: linear;
  }

  .swiper-touched {
    transition-duration: 0ms!important;
  }

  div:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  .slick-arrow {
    display: none !important;
  }

`;