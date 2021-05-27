import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {CountryItem} from "./CountryItem";
import {changeCountryItem} from "../../../redux/feature/slices/countriesCarouselSlice";
import {selectCountriesCarouselItem} from "../../../redux/feature/slices/countriesCarouselSlice";
import {useDispatch, useSelector} from "react-redux";

import Carousel, {autoplayPlugin, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './carousel-countries.scss';
const CountriesListBase = ({items, openModal, setModalContent}) => {

    const dispatch = useDispatch();
    const currentItem = useSelector(state => selectCountriesCarouselItem(state));

    return (
        <Carousel
            plugins={[
                'infinite',
                'centered',
                {
                    resolve: autoplayPlugin,
                    options: {
                        interval: 8050,
                    }
                },
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 5,
                    },
                },
            ]}
            animationSpeed={8000}
        >
            {
                items.map(id => {
                    return (
                        <CountryItem
                            openModal={openModal}
                            setModalContent={setModalContent}
                            key={id}
                            countryId={id}
                        />
                    )
                })
            }

        </Carousel>

    )
}

export const CountryList = styled(CountriesListBase)``;