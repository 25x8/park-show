import styled from "styled-components";
import noPhoto from '../../../assets/images/no-photo.jpg'
import {useSelector} from "react-redux";
import {selectWinnerByName, selectWinnersById} from "../../../redux/feature/slices/winnersSlice";
import {selectGameByArrayOfId, selectGameIconAndNameById} from "../../../redux/feature/slices/gamesSlice";
import {selectCountryFlag} from "../../../redux/feature/slices/countrySlice";

const WinnerContentBase = ({className, winnerId}) => {

    const winner = useSelector(state => selectWinnersById(state, winnerId));
    const allWinnerResults = useSelector(state => selectWinnerByName(state, winner.name.ru));
    const allWinnerGames = useSelector(state => selectGameByArrayOfId(state, allWinnerResults.map(el => {
        return {
            gameId: el.gameId,
            year: el.year,
            rank: el.rank,
            result: el.result
        }
    })))

    const flag = useSelector(state => selectCountryFlag(state, winner.countryId));
    const setDefaultPhoto = (e) => {
        e.target.src = noPhoto;
    }


    return (
        <div className={className}>
            <div className="modal__header">
                <div className="modal__header--flag">
                    <img src={flag} alt=""/>
                </div>
                <div className="modal__header--title">
                    {winner.name.ru}
                </div>
            </div>
            <div className="modal__description">
                {winner.description.ru}
            </div>
            <div className="modal__photo">
                {
                    <img onError={setDefaultPhoto} src={winner.photo ? winner.photo : noPhoto} alt=""/>
                }
            </div>
            <div className="result-wrap">
                {allWinnerGames.map((result,index) => {

                    return (
                        <div className="modal__footer" key={index}>
                            <div className="modal__footer--game">
                                <div className="game__icon">
                                    <img src={result.game.image} alt=""/>
                                </div>
                                <div className="game__text">
                                    <div className="game__text--label">{result.game.name.ru}</div>
                                    <div className="game__text--year">{result.year} год</div>
                                </div>
                            </div>
                            <div className="modal__footer--result">
                                <div className="result__rank">
                                    {result.rank} место
                                </div>
                                {winner.result &&
                                <div className="result__score">
                                    результат: {result.result}
                                </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const ModalContentWinner = styled(WinnerContentBase)`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  
  .result-wrap {
    max-height: 175px;
    overflow: auto;
  }

  .modal__header {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

    &--title {
      padding: 0 1rem;
      font-weight: bold;
      font-size: 26px;
      text-transform: uppercase;
    }

    &--flag {
      height: 46px;
    }
  }

  .modal__description {
    font-size: 16px;
    padding: 1rem 0;
  }

  .modal__photo {
    height: 700px;
    display: flex;
    justify-content: center;

    img {
      border: 1px solid #c4ccdf;
      max-height: 100%;
    }
  }

  .modal__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    &--game {
      display: flex;
      align-items: center;

      .game__text {
        padding: 0 0.5rem;

        &--label {
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      .game__icon {
        height: 42px;
      }
    }

    &--result {
      .result__rank {
        font-weight: bold;
        text-transform: uppercase;
        text-align: right;
      }
    }

  }
`;