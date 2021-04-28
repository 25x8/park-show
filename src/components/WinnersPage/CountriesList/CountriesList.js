import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {CountryItem} from "./CountryItem";
import {changeCountryItem} from "../../../redux/feature/slices/countriesCarouselSlice";
import {selectCountriesCarouselItem} from "../../../redux/feature/slices/countriesCarouselSlice";
import {useDispatch, useSelector} from "react-redux";

const CountriesListBase = ({ items, openModal, setModalContent}) => {

    const dispatch = useDispatch();
    const currentItem = useSelector(state => selectCountriesCarouselItem(state));

    return (
        <AliceCarousel
            infinite={true}
            autoPlay={true}
            autoPlayInterval={0}
            animationDuration={3000}
            animationEasingFunction={'linear'}
            disableButtonsControls={true}
            activeIndex={currentItem}
            disableDotsControls={true}
            mouseTracking={true}
            touchTracking={true}
            onSlideChanged={e => {
                dispatch(changeCountryItem(e.item))
            }}
            responsive={{
                0: {
                    items: 5
                },
                1919: {
                    items: 5
                }
            }}
            items={
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
            }/>


    )
}

export const CountryList = styled(CountriesListBase)``;