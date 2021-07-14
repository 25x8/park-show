import styled from "styled-components";
import piedestal from '../../../../../assets/images/piedestal.png';
import {selectTwoCountriesByIds} from "../../../../../redux/feature/slices/countrySlice";
import {useSelector} from "react-redux";
import {selectWinnersByCountryIdYearAndGameId} from "../../../../../redux/feature/slices/winnersSlice";
import {useState} from "react";
import {ModalDialog} from "../../../ModalDialog";
import {ModalContentWinner} from "../../ModalContentWinner";

const GameRanksBase = ({className, firstPlace, secondPlace, thirdPlace, gameId, year}) => {
    const firstCountries = useSelector(state => selectTwoCountriesByIds(state, firstPlace));
    const secondCountries = useSelector(state => selectTwoCountriesByIds(state, secondPlace));
    const thirdCountries = useSelector(state => selectTwoCountriesByIds(state, thirdPlace));


    const firstWinners =
        useSelector(state => selectWinnersByCountryIdYearAndGameId(state, firstPlace, gameId, year));
    const secondWinners =
        useSelector(state => selectWinnersByCountryIdYearAndGameId(state, secondPlace, gameId, year));
    const thirdWinners =
        useSelector(state => selectWinnersByCountryIdYearAndGameId(state, thirdPlace, gameId, year));

    const [show, setShow] = useState(false);

    const [currentId, setCurrentId] = useState(firstWinners.length > 0 && firstWinners[0].id);

    return (
        <>
            {
                show && <ModalDialog
                    openState={show}
                    close={() => {
                        setShow(false);
                    }}
                    center={true}
                    content={<ModalContentWinner winnerId={currentId}/>}
                />
            }

            <div className={className}>
                <div className="country country__row">

                    <div
                        className={`country country--item country__two ${secondCountries.length > 1 && 'two-winners'}`}>
                        {
                            secondCountries.length === 0 && (
                                <div className="country__block" style={{visibility: "hidden"}}>
                                    <div className="country country__flag">
                                        <img src={"/flags/cn.png"} alt=""/>
                                    </div>
                                    <div className="country country__name">
                                        Страна
                                    </div>
                                </div>
                            )
                        }
                        {
                            secondCountries.map(country => {
                                return (
                                    <div className="country__block" key={country.id}>
                                        <div className="country country__flag">
                                            <img src={country.flag} alt=""/>
                                        </div>
                                        <div className="country country__name">
                                            {country.name.ru}
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                    <div className={`country country--item country__one ${firstCountries.length > 1 && 'two-winners'}`}>
                        {
                            firstCountries.length === 0 && (
                                <div className="country__block" style={{visibility: "hidden"}}>
                                    <div className="country country__flag">
                                        <img src={"/flags/cn.png"} alt=""/>
                                    </div>
                                    <div className="country country__name">
                                        Страна
                                    </div>
                                </div>
                            )
                        }
                        {
                            firstCountries.map(country => {
                                return (
                                    <div className="country__block" key={country.id}>
                                        <div className="country country__flag">
                                            <img src={country.flag} alt=""/>
                                        </div>
                                        <div className="country country__name">
                                            {country.name.ru}
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                    <div
                        className={`country country--item country__three ${thirdCountries.length > 1 && 'two-winners'}`}>
                        {
                            thirdCountries.length === 0 && (
                                <div className="country__block" style={{visibility: "hidden"}}>
                                    <div className="country country__flag">
                                        <img src={"/flags/cn.png"} alt=""/>
                                    </div>
                                    <div className="country country__name">
                                        Страна
                                    </div>
                                </div>
                            )
                        }
                        {
                            thirdCountries.map(country => {
                                return (
                                    <div className="country__block" key={country.id}>
                                        <div className="country country__flag">
                                            <img src={country.flag} alt=""/>
                                        </div>
                                        <div className="country country__name">
                                            {country.name.ru}
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                </div>
                <div className="country country__pedestal">
                    <img src={piedestal} alt=""/>
                </div>
                <div className="country country__winners">
                    <div className="country country__winners--two">
                        {secondWinners.map((el, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setCurrentId(el.id)
                                        setShow(true)
                                    }}
                                    className={'winner-item'}
                                >
                                    {el.name.ru}
                                </div>
                            )
                        })}
                    </div>
                    <div className="country country__winners--one">
                        {firstWinners.map((el, index) => {
                            return (
                                <div key={index}
                                     onClick={() => {
                                         setCurrentId(el.id)
                                         setShow(true)
                                     }}
                                     className={'winner-item'}
                                >
                                    {el.name.ru}
                                </div>
                            )
                        })}
                    </div>
                    <div className="country country__winners--three">
                        {thirdWinners.map((el, index) => {
                            return (
                                <div key={index}
                                     onClick={() => {
                                         setCurrentId(el.id);
                                         setShow(true)
                                     }}
                                     className={'winner-item'}
                                >
                                    {el.name.ru}
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export const GameRanks = styled(GameRanksBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .country {
    text-align: center;
    margin: 0 1rem;
  }

  .country__row {
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    width: 100%;
    min-height: 136px;
  }

  .country--item {
    display: flex;
    align-items: center;
    flex-direction: column;

    .country__flag {
      margin-bottom: 1rem;
    }
  }

  .two-winners {
    flex-direction: row !important;
    justify-content: space-between;

    .country__block:last-child {
      position: absolute;
      left: 120%;
    }
  }

  .country__two {
    transform: translate(4rem, 3.5rem);

    &.two-winners {
      transform: translate(-0.5rem, 3.5rem) scale(0.8) !important;
    }
  }

  .country__one {
    transform: translate(0, -0.5rem);

    &.two-winners {
      transform: translate(-50%, 0.5rem) scale(0.8) !important;
    }
  }

  .country__three {
    transform: translate(-5rem, 5.5rem);

    &.two-winners {
      transform: translate(-8rem, 7.5rem) scale(0.8) !important;
    }
  }

  .country__block {
    text-align: center;
    min-width: 143px;
  }

  .country__winners {
    display: grid;
    grid-template-columns: 30% 1fr 29%;
    align-items: start;
    overflow: auto;
    max-height: 170px;
  }
  
  .country__name {
    position: absolute;
    font-size: 1.5rem;
    width: 110%;
    left: -10%;
    overflow-wrap: anywhere;
  }
  
  .winner-item {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    text-align: left;
  }
  
  .country__pedestal{
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

