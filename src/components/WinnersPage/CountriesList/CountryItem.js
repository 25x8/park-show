import styled from "styled-components";
import {ModalDialog} from "../../Modal/ModalDialog";
import {ModalContentCountry} from "../../Modal/modalContent/Country/ModalContentCountry";
import {useSelector} from "react-redux";
import {selectCountryById} from "../../../redux/feature/slices/countrySlice";
import {useState} from "react";


const CountryItemBase = ({className, countryId}) => {

    const country = useSelector(state => selectCountryById(state, countryId));
    const {flag: image, name} = country;
    const [show, setShow] = useState(false);

    return (
        <>
            {
                show && <ModalDialog
                    openState={show}
                    close={() => setShow(false)}
                    center={true}
                    content={<ModalContentCountry setShowModal={setShow} countryId={countryId}/>}
                />
            }
            <div
                className={className}
                onClick={() => {
                    setShow(true);
                }}
            >
                <div className="item item__flag">
                    <img src={image} alt=""/>
                </div>
                <div className="item item__name">
                    {name.ru}
                </div>
            </div>
        </>
    )

}

export const CountryItem = styled(CountryItemBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .item__flag {
    width: 180px;
    height: 120px;

    img {
      width: 100%;
      height: 100%
    }
  }

  .item__name {
    margin-top: 0.5rem;
  }

`;