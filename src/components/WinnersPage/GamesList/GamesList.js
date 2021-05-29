import styled from "styled-components";
import {GameItem} from "./GameItem";
import {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Mousewheel} from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./carousel.scss"

SwiperCore.use([Mousewheel, Autoplay]);

const GamesListBase = ({className, items}) => {
    const [show, setShow] = useState(false);

    const gameCard = (gameId) => {
        return (
            <GameItem
                key={gameId}
                gameId={gameId}
                setShowModal={(payload) => {
                    setShow(payload)
                }}
            />
        )
    }

    const getCardRow = () => {
        const rows = [];
        const rowsNumber = Math.round(items.length / 4);
        for (let i = 0; i < rowsNumber; i++) {
            const newRow = [];
            (i * 4) < items.length && newRow.push(gameCard(items[i * 4]));
            (i * 4) + 1 < items.length && newRow.push(gameCard(items[(i * 4) + 1]));
            (i * 4) + 2 < items.length && newRow.push(gameCard(items[(i * 4) + 2]));
            (i * 4) + 3 < items.length && newRow.push(gameCard(items[(i * 4) + 3]));
            i === 7 && newRow.push(gameCard(items[7]))
            rows.push(newRow)
        }

        return rows;
    }

    const CardRow = ({rowItems}) => {
        return (
            <div className={'row-card'}>
                {rowItems}
            </div>
        )
    }


    return (
        <div className={className}>
            <Swiper
                speed={7000}
                direction={'vertical'}
                className="mySwiper"
                slidesPerView={3}
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
                    getCardRow().map((row, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CardRow rowItems={row}/>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export const GamesList = styled(GamesListBase)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 70vh !important;
  
  .swiper-container {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  .swiper-wrapper {
    //transition-duration: 7000ms!important;
    transition-timing-function: linear;
  }
  
  .swiper-touched {
    //transition-duration: 0ms!important;
  }
  .row-card {
    display: flex;
    justify-content: space-around;
    padding: 1.5rem 0.5rem;
  }

  .grid-mode {
    display: grid !important;
    gap: 1rem;
    padding: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

  }

  .slick-arrow {
    display: none !important;
  }

`;