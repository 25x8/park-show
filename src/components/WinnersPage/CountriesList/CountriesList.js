import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {CountryItem} from "./CountryItem";

import {selectCountriesCarouselItem} from "../../../redux/feature/slices/countriesCarouselSlice";
import {useDispatch, useSelector} from "react-redux";


import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Mousewheel} from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Mousewheel, Autoplay]);

const CountriesListBase = ({items, openModal, setModalContent, className}) => {

    const dispatch = useDispatch();
    const currentItem = useSelector(state => selectCountriesCarouselItem(state));

    return (
        <Swiper
            speed={7000}
            className={className}
            slidesPerView={5}
            loop={true}
            mousewheel={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                waitForTransition: true
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
                items.map(id => {
                    return (
                        <SwiperSlide key={id}>
                            <CountryItem
                                openModal={openModal}
                                setModalContent={setModalContent}
                                countryId={id}
                            />
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>

    )
}

export const CountryList = styled(CountriesListBase)`
  .swiper-wrapper {
    //transition-duration: 7000ms!important;
    transition-timing-function: linear;
  }
`;