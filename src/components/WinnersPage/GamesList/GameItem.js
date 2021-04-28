import styled from "styled-components";
import {ModalContentGame} from "../../Modal/modalContent/Game/ModalContentGame";
import {ModalDialog} from "../../Modal/ModalDialog";
import {selectGameById} from "../../../redux/feature/slices/gamesSlice";
import {useSelector} from "react-redux";
import {useState} from "react";


const GameItemBase = ({className, gameId, setShowModal}) => {
    const game = useSelector(state => selectGameById(state, gameId));
    const {image, name} = game;
    const [show, setShow] = useState(false);
    return (
        <>
            {show && <ModalDialog
                openState={show}
                close={() => {
                    setShowModal(false)
                    setShow(false)
                }}
                center={true}
                content={<ModalContentGame gameId={gameId}/>}
            />
            }
            <div className={className}
                 onClick={() => {
                     setShow(true);

                 }}
            >
                <div className="item item__icon">
                    <img src={image} alt=""/>
                </div>
                <div className="item item__text">
                    <div className="item item__text--name">
                        {name.ru}
                    </div>
                </div>
            </div>
        </>
    )
}

export const GameItem = styled(GameItemBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: #faf6f6;
  padding: 1rem 0;
  width: 250px;
  height: 200px;
  box-shadow: 0 0 3px #897e7e;
  cursor: pointer;

  .item__icon {
    height: 100px;
    margin-top: 1rem;

    img {
      height: 100%;
    }
  }

  .item__text {
    text-align: center;
    text-transform: uppercase;
    margin: 0 1rem;

    .item__text--name {
      font-weight: bold;
      margin: 0.5rem 0;
    }

    .item__text--description {
      font-size: 14px;
    }
  }
`;