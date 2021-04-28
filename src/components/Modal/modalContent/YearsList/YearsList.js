import {YearItem} from "./YearItem";
import styled from "styled-components";
import {useState} from "react";

const YearsListBase = ({className, items, onItemClick}) => {
    const activeList = new Array(items.length).fill(false);
    activeList[activeList.length - 1] = true;
    const [active, setActive] = useState(activeList);

    return (
        <div className={className}>
            {
                items.map((year, index) => <YearItem key={year} year={year}
                                                     setActiveState={(newStateActive) => {
                                                         if(!active[index]) {
                                                             setActive(prev => {
                                                                 const newState = [...prev];
                                                                 newState.fill(false);
                                                                 newState[index] = newStateActive;
                                                                 return newState
                                                             })
                                                         }
                                                     }
                                                     }
                                                     active={active[index]}
                                                     onItemClick={onItemClick}/>)
            }
        </div>
    )
}

export const YearsList = styled(YearsListBase)`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;