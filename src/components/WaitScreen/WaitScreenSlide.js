import styled from "styled-components";
import noPhoto from '../../assets/images/no-photo.jpg';
import {useSelector} from "react-redux";
import {selectWinnerByName, selectWinnersById} from "../../redux/feature/slices/winnersSlice";
import {selectGameByArrayOfId, selectGameIconAndNameById} from "../../redux/feature/slices/gamesSlice";
import {selectCountryFlag} from "../../redux/feature/slices/countrySlice";

const WaitScreenSlideBase = ({className, winnerId}) => {
    const winner = useSelector(state => selectWinnersById(state, winnerId));
    const allWinnerResults = useSelector(state => selectWinnerByName(state, winner.name.ru));
    const allWinnerGames = useSelector(state => selectGameByArrayOfId(state, allWinnerResults.map(el => {
        return {
            gameId: el.gameId,
            year: el.year,
            rank: el.rank,
            result: el.result
        }
    })));

    const flag = useSelector(state => selectCountryFlag(state, winner.countryId));
    const setDefaultPhoto = (e) => {
        e.target.src = noPhoto;
    }

    return (
        <div className={`${className} screen-server`}>
            <div className="result-wrap">
                {allWinnerGames.map((result, index) => {
                    return (
                        <div className="modal__footer" key={index}>
                            <div className="modal__footer--game">
                                <div className="_game__icon">
                                    <img src={result.game.image} alt=""/>
                                </div>
                                <div className="_game__name">
                                    {result.game.name.ru}
                                </div>
                            </div>
                            <div className="modal__footer--result">
                                <div className="_game__text--year">{result.year} год</div>
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
            <div className="screen screen__info">
                <div className="screen screen__photo">
                    {
                        <img onError={setDefaultPhoto} src={winner.photo ? winner.photo : noPhoto} alt=""/>
                    }
                </div>
                <div className="screen screen__header">
                    <div className="screen screen__header--flag">
                        <img src={flag} alt=""/>
                    </div>
                    <div className="screen screen__header--title">
                        {winner.name.ru}
                    </div>
                </div>
            </div>
        </div>
    )

}

export const WaitScreenSlide = styled(WaitScreenSlideBase)`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .modal__footer {
    display: flex;
    margin-bottom: 3rem;

    &--game {
      display: flex;
      flex-direction: column;
      position: relative;
      
      ._game__name {
        color: black;
        font-size: 2rem;
        width: 320px;
        top: 100%;
        position: absolute;
        text-align: center;
      }
    }

    &--result {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .result__rank, .result__score {
    color: black;
  }

  .result-wrap {
    margin-left: 8rem;
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    align-self: start;
    margin-top: 9rem;
  }


  ._game__icon {
    height: 200px;
  }

  ._game__text--year {
    font-size: 2rem;
    color: #f39324
  }

  .screen__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: 8rem;

  }

  .screen__header {

    max-width: 600px;
    width: 600px;

    min-height: 200px;
    display: grid;
    grid-template-columns: 180px 1fr;
    align-items: center;


    &--flag {
      height: 6rem;
    }

    &--title {
      font-size: 3.5rem;
      font-weight: bold;
      color: black;
    }
  }

  .screen__photo {
    height: 600px;
    width: 600px;
    min-width: 600px;
    box-shadow: 0 0 20px #f39324;
    margin-bottom: 2rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
