import styled from "styled-components";
import {GameItem} from "./GameItem";
import Slider from 'react-slick';
import {useState} from "react";

const GamesListBase = ({className, items}) => {
    let sliderObject;
    const [show, setShow] = useState(false);

    const gameCard = (gameId) => {
        return (
            <GameItem
                key={gameId}
                gameId={gameId}
                setShowModal={(payload) => {
                    sliderObject.slickPlay()
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

    const settings = {
        infinite: true,
        vertical: true,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
    }


    return (
        <div className={className}>
            <Slider
                ref={ref => {
                    sliderObject = ref
                }}
                {...settings}
            >
                {
                    getCardRow().map((row, index) => {
                        return <CardRow key={index} rowItems={row}/>
                    })
                }

            </Slider>
        </div>
    )
}

export const GamesList = styled(GamesListBase)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  height: 70vh !important;

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