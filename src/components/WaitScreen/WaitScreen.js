import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectSortedWinnersIds} from "../../redux/feature/slices/winnersSlice";
import background from '../../assets/images/background.png'

import AliceCarousel from "react-alice-carousel";
import {WaitScreenSlide} from "./WaitScreenSlide";


const WaitScreenBase = ({className}) => {
    const winnersIds = useSelector(state => selectSortedWinnersIds(state));

    return (
        <div className={className}>

            <AliceCarousel
                infinite={true}
                autoPlay={true}
                autoPlayInterval={100000}
                animationDuration={800}
                animationType="fadeout"
                disableButtonsControls={true}
                disableDotsControls={true}
                mouseTracking={true}
                touchTracking={true}
                items={ winnersIds.map(winnerId => {
                    return <WaitScreenSlide key={winnerId} winnerId={winnerId}/>
                })}
        />

        </div>
    )
}

export const WaitScreen = styled(WaitScreenBase)`
  height: 100vh;
  background: url(${background});
  display: flex;
  .alice-carousel__stage > li {
    div:first-child {

      align-items: center;
    }
  }
`;