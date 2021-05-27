import styled from "styled-components";
import {WinnerItem} from "./WinnerItem";
import Slider from 'react-slick';

const WinnersListBase = ({className, items}) => {
    let sliderObject;

    const settings = {
        infinite: true,
        vertical: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 50,
        cssEase: "linear",
    }

    return (
        <div className={className}>
            <Slider
                {...settings}
                ref={ref => {
                    sliderObject = ref
                }}
            >
            {
                items.map(item => {
                    return (
                        <WinnerItem
                            key={item}
                            winnerId={item}
                            onModalClose={() => {
                                sliderObject.slickPlay()
                            }}
                        />)
                })
            }
            </Slider>
        </div>
    )
}

export const WinnersList = styled(WinnersListBase)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 130px);
  font-size: 2rem;

  div:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  .slick-arrow {
    display: none !important;
  }
  
`;