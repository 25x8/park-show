import styled from "styled-components";
import {GameItemWithWinners} from '../CountryRanks/GameItemWithNames'

const RanksBase = ({className, itemsRankOne, itemsRankTwo, itemsRankThree, year, countryId, setShowModal}) => {
    return (
        <div className={className}>
            {
                itemsRankOne.length > 0 &&
                (
                    <div className="rank-list">
                        <div className="rank-list__title">
                            1 место
                        </div>
                        <div className="rank-list__games">
                            {
                                itemsRankOne.map(id => {
                                    return <GameItemWithWinners
                                        key={id}
                                        gameId={id}
                                        year={year}
                                        countryId={countryId}
                                        setShowModal={setShowModal}
                                    />
                                })
                            }
                        </div>
                    </div>
                )
            }
            {
                itemsRankTwo.length > 0 &&

                (
                    <div className="rank-list">
                        <div className="rank-list__title">
                            2 место
                        </div>
                        <div className="rank-list__games">
                            {
                                itemsRankTwo.map(id => {
                                    return <GameItemWithWinners
                                        key={id}
                                        gameId={id}
                                        year={year}
                                        countryId={countryId}
                                        setShowModal={setShowModal}
                                    />
                                })
                            }
                        </div>

                    </div>
                )
            }
            {
                itemsRankThree.length > 0 &&
                (
                    <div className="rank-list">
                        <div className="rank-list__title">
                            3 место
                        </div>
                        <div className="rank-list__games">
                            {
                                itemsRankThree.map(id => {
                                    return <GameItemWithWinners
                                        key={id}
                                        gameId={id}
                                        year={year}
                                        countryId={countryId}
                                        setShowModal={setShowModal}
                                    />
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export const CountryRanks = styled(RanksBase)`
  display: flex;
  flex-direction: column;
  max-height: 100%;

  .rank-list {
    &__title {
      text-align: center;
      font-size: 26px;
      text-transform: uppercase;
      font-weight: bold;
      margin: 1rem 0;
    }

    &__games {
      display: flex;
      flex-wrap: wrap;
      gap: 3em;
      justify-content: center;
      padding: 10px 0;
    }

    &:first-child {
      .rank-list__title {
        margin-top: 0
      }
    }
  }

`;