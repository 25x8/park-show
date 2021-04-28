import styled from "styled-components";
import {GameItem} from "../../../../WinnersPage/GamesList/GameItem";
import {useSelector} from "react-redux";
import {selectWinnersByCountryIdYearAndGameId} from "../../../../../redux/feature/slices/winnersSlice";
import {ModalDialog} from "../../../ModalDialog";
import {ModalContentWinner} from "../../ModalContentWinner";
import {useState} from "react";

const GameItemWithNamesBase = ({className, gameId, countryId, year, setShowModal}) => {

    const winners = useSelector(state => selectWinnersByCountryIdYearAndGameId(state, [countryId, null], gameId, year));
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState(winners.length > 0 && winners[0].id);

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

            <div
                className={className}
            >
                <GameItem
                    gameId={gameId}
                    setShowModal={setShowModal}
                />
                {
                    winners.map((winner, index) => {
                        return (
                            <div
                                key={index}
                                className={'winner-name'}
                                onClick={() => {
                                    setCurrentId(winner.id)
                                    setShow(true)
                                }}
                            >
                                {winner.name.ru}
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}

export const GameItemWithWinners = styled(GameItemWithNamesBase)`
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    margin-bottom: 1rem;
  }
  
  .winner-name {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }
`;