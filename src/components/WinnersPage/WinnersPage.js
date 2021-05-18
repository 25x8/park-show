import styled from "styled-components";
import background from '../../assets/images/background.png';
import {WinnersList} from "./WinnersList/WinnersList";
import {GamesList} from "./GamesList/GamesList";
import {CountryList} from "./CountriesList/CountriesList";
import {useDispatch, useSelector} from "react-redux";
import {selectGamesIds} from "../../redux/feature/slices/gamesSlice";
import {selectCountriesIds} from "../../redux/feature/slices/countrySlice";
import {selectSortedWinnersIds} from "../../redux/feature/slices/winnersSlice";
import {changeAfkState} from "../../redux/feature/slices/afkSlice";

const WinnersPageBase = ({className}) => {
    const gameIds = useSelector(state => selectGamesIds(state));
    const countriesIds = useSelector(state => selectCountriesIds(state));
    const winnersIds = useSelector(state => selectSortedWinnersIds(state));
    const dispatch = useDispatch();


    return (
        <div className={className}>
            <div className="section section__left">
                <div className="section section__game">
                    <div
                        className="section__title"
                        onClick={() => {
                            // dispatch(changeAfkState(true));
                        }}
                    >
                        Конкурсы</div>
                    <GamesList items={gameIds}/>
                </div>
                <div className="section section__countries">
                    <div className="section__title">Страны</div>
                    <CountryList  items={countriesIds}/>
                </div>
            </div>
            <div className="section section__winners">
                <div className="section__title">Победители</div>
                <WinnersList  items={winnersIds}/>
            </div>

        </div>
    )
}

export const WinnersPage = styled(WinnersPageBase)`
  display: grid;
  grid-template-columns: 66% 1fr;
  background-image: url('${background}');

  .section__title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 0;
  }

  .section__left {
    margin-left: 20px;
    margin-right: 10px;
  }

  .section__game {

    height: calc(100vh - 350px);
  }

  .section__winners {
    margin-right: 20px;
    margin-left: 10px;
  }

  .section__countries {
    margin-top: 6rem;
  }

`;