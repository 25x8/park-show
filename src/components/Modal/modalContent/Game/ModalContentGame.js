import {YearsList} from "../YearsList/YearsList";
import {GameRanks} from "./GameRanks/GameRanks";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectGameById} from "../../../../redux/feature/slices/gamesSlice";
import {useState} from "react";
import {
    selectCountryResultsByGameId,
    selectGameResultsYearsByCountryId
} from "../../../../redux/feature/slices/countriesResultSlice";

const GameContentBase = ({className, gameId}) => {

    const game = useSelector(state => selectGameById(state, gameId))
    const {image: gameImage, name, description} = game;
    const yearResults = useSelector(state => selectGameResultsYearsByCountryId(state, gameId));
    const resultsByYears = useSelector(state => selectCountryResultsByGameId(state, gameId));
    const [selectedYear, selectYear] = useState(yearResults[yearResults.length - 1]);
    return (
        <div className={className}>
            <div className="modal__header">
                <div className="modal__header--icon">
                    <img src={gameImage} alt=""/>
                </div>
                <div className="modal__header--title">
                    <div className="title__name">
                        {name.ru}
                    </div>
                    <div className="title__short">
                        {description.ru}
                    </div>
                </div>
            </div>
            <div className="modal__body">
                <GameRanks
                    firstPlace={resultsByYears[selectedYear]["1"]}
                    secondPlace={resultsByYears[selectedYear]["2"]}
                    thirdPlace={resultsByYears[selectedYear]["3"]}
                    gameId={gameId}
                    year={selectedYear}
                />


            </div>
            <div className="years-list">
                <YearsList items={yearResults}
                    onItemClick={(year) => selectYear(year)}
                />
            </div>
        </div>
    )
}

export const ModalContentGame = styled(GameContentBase)`
  min-width: 800px;

  .modal__header {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

    &--title {
      padding: 0 1rem;

      .title__name {
        font-weight: bold;
        font-size: 26px;
        text-transform: uppercase;
      }
      .title__short {
        text-transform: lowercase;
      }
      
    }

    &--icon {
      height: 64px;
    }
  }
  
  .modal__body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem 0;
    
    &--image {
     max-width: 50%;
      img {
        width: 100%;
      }
    }
  }
`;