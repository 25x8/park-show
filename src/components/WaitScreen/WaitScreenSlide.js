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
            <div className="screen screen__header">
                <div className="screen screen__header--flag">
                    <img src={flag} alt=""/>
                </div>
                <div className="screen screen__header--title">
                    {winner.name.ru}
                </div>
            </div>
                <div className="screen screen__info">
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

                    <div className="screen screen__photo">
                        {
                            <img onError={setDefaultPhoto} src={winner.photo ? winner.photo : noPhoto} alt=""/>
                        }
                    </div>
                </div>

        </div>
    )

}

export const WaitScreenSlide = styled(WaitScreenSlideBase)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;


  .modal__footer {
    display: flex;
    margin-bottom: 3rem;

    &--game {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-right: 1.5rem;
      
      ._game__name {
        color: black;
        font-size: 1.2rem;
        width: 320px;
        top: 100%;
        position: absolute;
        text-align: center;
        right: 50%;
        transform: translateX(50%);
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
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    align-self: start;
  }


  ._game__icon {
    height: 150px;
  }

  ._game__text--year {
    font-size: 2rem;
    color: #f39324;
  }
  
 

  .screen__info {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }

  .screen__header {
    
    margin: 0 3rem;

    min-height: 200px;
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: center;


    &--flag {
      height: 5rem;
    }

    &--title {
      font-size: 2.5rem;
      font-weight: bold;
      color: black;
    }
  }

  .screen__photo {
    height: 400px;
    width: 400px;
    min-width: 400px;
    box-shadow: 0 4px 20px #cac6c6;
    margin-bottom: 2rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
