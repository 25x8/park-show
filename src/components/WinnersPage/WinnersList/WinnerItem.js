import styled from "styled-components";
import {ModalDialog} from "../../Modal/ModalDialog";
import {ModalContentWinner} from "../../Modal/modalContent/ModalContentWinner";
import {selectWinnersById} from "../../../redux/feature/slices/winnersSlice";
import {selectCountryById} from "../../../redux/feature/slices/countrySlice";
import {useSelector} from "react-redux";
import {useState} from "react";


const WinnerListBase = ({className, winnerId, onModalClose}) => {

    const winner = useSelector(state => selectWinnersById(state, winnerId));
    const country = useSelector(state => selectCountryById(state, winner.countryId));
    const [show, setShow] = useState(false);

    return (
        <>
            {
               show && <ModalDialog
                    openState={show}
                    close={() => {
                        setShow(false);
                        onModalClose();
                    }}
                    center={true}
                    content={<ModalContentWinner winnerId={winnerId}/>}
                />
            }
            <div
                className={className}
                onClick={() => {
                    setShow(true);
                }}
            >
                <div className="item item__flag">
                    <img src={country.flag} alt=""/>
                </div>
                <div className="item item__descr">
                    <div className="item item__descr--main">
                        {winner.name.ru}
                    </div>
                </div>
                {/*<div className="item item__result">*/}
                {/*    <div className="item item__result--logo">*/}
                {/*        <img src={game.image} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="item item__result--main">*/}
                {/*        {winner.result}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export const WinnerItem = styled(WinnerListBase)`
  display: grid;
  grid-template-columns: 64px 1fr;
  color: #4B534F;
  font-weight: bold;
  align-items: center;
  cursor: pointer;

  .item__flag {
    border: 1px solid #000;
    height: 36px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .item__descr {
    text-transform: uppercase;
    margin-right: auto;
    margin-left: 20px;
  }

  .item__result {
    display: flex;
    align-items: center;
    min-width: 140px;

    .item__result--logo {
      height: 32px;
      width: 36px;
      margin-right: 0.5rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

  }
`;

