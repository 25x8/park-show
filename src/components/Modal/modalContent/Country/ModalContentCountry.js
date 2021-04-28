import {YearsList} from "../YearsList/YearsList";
import {CountryRanks} from "./CountryRanks/CountryRanks";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectCountryById} from "../../../../redux/feature/slices/countrySlice";
import {selectCountriesResultYearsByCountryId, selectCountryResultByCountryId} from "../../../../redux/feature/slices/countriesResultSlice";
import {useState} from "react";

const CountryContentBase = ({className, countryId, setShowModal}) => {

    const country = useSelector(state => selectCountryById(state, countryId));
    const {flag: image, name} = country;
    const yearResults = useSelector(state => selectCountriesResultYearsByCountryId(state, countryId));
    const resultsByYears = useSelector(state => selectCountryResultByCountryId(state, countryId));
    const [selectedYear, selectYear] = useState(yearResults[yearResults.length - 1]);


    return (

        <div className={className}>
            <div className="modal__header">
                <div className="modal__header--icon">
                    <img src={image} alt=""/>
                </div>
                <div className="modal__header--title">
                    <div className="title__name">
                        {name.ru}
                    </div>
                </div>
            </div>
            <div className="modal__ranks">
                { selectedYear > 0 &&
                    <CountryRanks
                        itemsRankOne={resultsByYears[selectedYear]["1"]}
                        itemsRankTwo={resultsByYears[selectedYear]["2"]}
                        itemsRankThree={resultsByYears[selectedYear]["3"]}
                        year={selectedYear}
                        countryId={countryId}
                        setShowModal={setShowModal}
                    />
                }
            </div>
            <div className="years-list">
                <YearsList
                    items={yearResults}
                    onItemClick={(year) => selectYear(year)}
                />
            </div>
        </div>

    )
}

export const ModalContentCountry = styled(CountryContentBase)`
  max-width: 80vw;
  min-width: 800px;
  max-height: 80vh;
  
  .modal__header {
    display: flex;
    margin-bottom: 2rem;
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
  
  .modal__ranks {
    max-height: 600px;
    overflow: auto;
    margin-bottom: 2rem;
  }
`;